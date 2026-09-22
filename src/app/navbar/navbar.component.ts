import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { IconComponent } from '../shared/icon/icon.component';
import { PROFILE } from '../shared/data/site-data';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy {
  name = PROFILE.name;

  // Centralized here so adding/renaming a route only requires editing this list —
  // the "ABOUT" link previously pointed at a route that didn't exist; fixed below.
  navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  isMenuOpen = false;
  isScrolled = false;

  private routerSub: Subscription;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Close the mobile menu automatically whenever a navigation completes,
    // so links behave correctly even without an explicit click handler.
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.isScrolled = window.scrollY > 8;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.setBodyScrollLock(this.isMenuOpen);
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.setBodyScrollLock(false);
    }
  }

  private setBodyScrollLock(locked: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.setBodyScrollLock(false);
  }
}
