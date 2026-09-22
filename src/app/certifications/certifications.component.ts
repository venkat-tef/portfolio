import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  // TODO: replace these placeholders with your real certifications
  // (title, issuing body, date earned, and an optional credential link).
  certifications: Certification[] = [
    { title: 'Add your certification title', issuer: 'Issuing organization', date: '2024', credentialUrl: '' },
    { title: 'Add your certification title', issuer: 'Issuing organization', date: '2024', credentialUrl: '' },
    { title: 'Add your certification title', issuer: 'Issuing organization', date: '2024', credentialUrl: '' }
  ];
}
