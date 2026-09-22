import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../shared/icon/icon.component';
import { ScrollRevealDirective } from '../shared/scroll-reveal/scroll-reveal.directive';
import { PROFILE, INTERESTS } from '../shared/data/site-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  profile = PROFILE;
  interests = INTERESTS;

  // Same professional summary already used on the Resume page — kept in sync
  // by copying the exact stated text rather than inventing new bio copy.
  summary =
    'UI Developer with 3+ years of experience designing and implementing user-centric interfaces. Skilled in HTML, CSS, JavaScript, and Angular, with a solid understanding of responsive design and accessibility standards. Demonstrated success in collaborating with cross-functional teams to enhance user experiences. Proven track record of delivering high-quality, engaging interfaces that improve user satisfaction and drive project success.';

  quickFacts = [
    { label: 'Based in', value: PROFILE.location },
    { label: 'Focused on', value: 'Angular & modern frontend' },
    { label: 'Currently', value: 'UI Developer at TCS' },
  ];
}
