import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projcts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projcts.component.html',
  styleUrl: './projcts.component.css'
})
export class ProjctsComponent {
  projects = [
    { 
      name: 'Project 1', 
      description: 'Description of project 1',
      role: 'Frontend Developer',  // Add the role property
      organization: 'Company ABC'   // Add the organization property
    },
    { 
      name: 'Project 2', 
      description: 'Description of project 2',
      role: 'Backend Developer',    // Add the role property
      organization: 'Company XYZ'   // Add the organization property
    },
    // Add more projects here
  ];
}
