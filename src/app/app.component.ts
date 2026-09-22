import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ResumeComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume-app';
  menuOpen = false;
  scrolled = false;
  readonly currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrolled = window.scrollY > 12;
    }
  }
}
