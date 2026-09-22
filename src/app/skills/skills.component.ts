import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML5', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS3', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' },
    { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
    { name: 'Angular', logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
    { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' }
  ];
}
