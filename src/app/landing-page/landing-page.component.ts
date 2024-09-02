import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Check if the platform is browser before accessing `document`
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const heroSection = this.renderer.selectRootElement('.hero-section', true);
        if (heroSection) {
          this.renderer.addClass(heroSection, 'show');
        }
      }, 2000); // 2 seconds delay
    }
  }
}
