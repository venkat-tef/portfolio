import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../shared/icon/icon.component';
import { PROFILE, SOCIAL_LINKS } from '../shared/data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  profile = PROFILE;
  // Only links with a real URL render — nothing here is invented.
  socialLinks = SOCIAL_LINKS.filter((link) => !!link.url);
  currentYear = new Date().getFullYear();

  navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];
}
