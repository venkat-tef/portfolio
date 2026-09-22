import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds a "reveal" class to the host element once it scrolls into view, and
 * removes the initial hidden state. Pure CSS (transform/opacity) drives the
 * actual animation — this directive only toggles a class.
 *
 * SSR-safe: IntersectionObserver only exists in the browser, so everything
 * here is guarded by isPlatformBrowser and the element is rendered visible
 * by default (no FOUC on the server-rendered/prerendered HTML).
 *
 * Respects prefers-reduced-motion: if the user has that preference set, the
 * element is revealed immediately with no animation.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  /** Optional stagger delay in ms, useful for sequential card reveals.
   *  Accepts number|string because a bare attribute usage (no square
   *  brackets, e.g. `appScrollReveal` with no value) binds an empty string. */
  @Input() appScrollReveal: number | string = 0;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    this.renderer.addClass(this.el.nativeElement, 'scroll-reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      // Skip the animation entirely — just show the content.
      this.renderer.addClass(this.el.nativeElement, 'scroll-reveal-visible');
      return;
    }

    if (this.appScrollReveal) {
      const delay = Number(this.appScrollReveal) || 0;
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition-delay',
        `${delay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'scroll-reveal-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
