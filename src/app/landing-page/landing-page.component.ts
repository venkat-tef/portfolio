import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('heroVideo')
  heroVideo?: ElementRef<HTMLVideoElement>;

  /**
   * Controls transition from:
   * Video -> Portfolio details
   */
  showDetails = false;

  private fallbackTimer?: ReturnType<typeof setTimeout>;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (
      !isPlatformBrowser(this.platformId) ||
      !this.heroVideo
    ) {
      return;
    }

    const video = this.heroVideo.nativeElement;

    /**
     * Try to start the video.
     *
     * muted + playsinline allows autoplay
     * on most modern browsers and iOS Safari.
     */
    const tryPlay = () => {

      video.play().catch(() => {

        /**
         * If browser blocks autoplay,
         * start video on first user interaction.
         */
        const resumeVideo = () => {

          video.play().catch(() => {});

          document.removeEventListener(
            'touchstart',
            resumeVideo
          );

          document.removeEventListener(
            'click',
            resumeVideo
          );
        };

        document.addEventListener(
          'touchstart',
          resumeVideo,
          {
            once: true,
            passive: true
          }
        );

        document.addEventListener(
          'click',
          resumeVideo,
          {
            once: true
          }
        );
      });
    };

    /**
     * Video already loaded.
     */
    if (video.readyState >= 2) {

      tryPlay();

    } else {

      /**
       * Wait until enough video data is loaded.
       */
      video.addEventListener(
        'loadeddata',
        tryPlay,
        {
          once: true
        }
      );
    }

    /**
     * Safety fallback.
     *
     * This is only here in case the video fails to
     * load or autoplay gets stuck.
     *
     * 30 seconds gives the video plenty of time to finish.
     */
    this.fallbackTimer = setTimeout(() => {

      if (!this.showDetails) {
        this.revealDetails();
      }

    }, 20000);
  }

  /**
   * Called when the video finishes.
   */
  onVideoEnded(): void {

    /**
     * Small pause before the portfolio
     * section starts coming down.
     */
    setTimeout(() => {

      this.revealDetails();

    }, 700);
  }

  /**
   * Called if video fails to load.
   */
  onVideoError(): void {

    this.revealDetails();
  }

  /**
   * Reveal portfolio details.
   */
  private revealDetails(): void {

    if (this.showDetails) {
      return;
    }

    this.showDetails = true;

    if (this.fallbackTimer) {

      clearTimeout(this.fallbackTimer);

      this.fallbackTimer = undefined;
    }
  }

  ngOnDestroy(): void {

    if (this.fallbackTimer) {

      clearTimeout(this.fallbackTimer);

      this.fallbackTimer = undefined;
    }
  }
}