import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  name = 'Venkat Narayana Kothakota';
  title = 'Frontend Developer';
  location = 'Hyderabad';
  linkedin = 'https://www.linkedin.com/in/venkat-narayana-kothakota-5b28a01a1';
  email = 'kothakotavenkatnarayana@gmail.com';
  phone = '8179518097';

  summary = `Experienced and certified Frontend Developer skilled in HTML, CSS, Bootstrap, Typescript, Javascript, Vue, and Angular. 
             Proven track record in issue resolution and collaborative problem-solving. Eager to contribute expertise to your company's success.`;

  experiences = [
    {
      role: 'System Engineer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'Hyderabad',
      period: 'December 2023 – Present',
      description: `Working as an Angular Developer. Utilized Scrum Agile methodology in daily work, including daily stand-ups, sprint planning, and collaboration with cross-functional teams. 
                    Engaged in researching, designing, implementing, and managing software programs. Developed a deep understanding of the startup ecosystem, remaining adaptable to evolving requirements and industry trends.`
    },
    {
      role: 'Frontend Developer',
      company: 'Capgemini',
      location: 'Hyderabad',
      period: 'April 2021 – July 2023',
      description: `Worked as a front-end developer focusing on Angular applications. Reviewed project requirements to uncover bugs and vulnerabilities, ensuring timely issue resolution.
                    Translated UI/UX design wireframes into responsive and visually appealing web pages, ensuring seamless user experiences. Collaborated closely with the engineering team, applying Agile methodologies to achieve project milestones effectively.
                    Optimized application performance for speed and compatibility across multiple browsers and devices. Maintained a client-first mentality, multitasking seamlessly to meet project deadlines and exceed client expectations.`
    }
  ];

  skills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue'
  ];

  projects = [
    {
      name: 'Telefonica',
      role: 'Angular Developer',
      organization: 'Ico',
      period: 'December 2023 – Present',
      description: `Contributed as an Angular Developer, collaborating on the development of a user-focused client interface.`
    },
    {
      name: 'Bewaak',
      role: 'Frontend Developer',
      organization: 'Capgemini',
      period: 'January 2022 – July 2023',
      description: `Created a project called Bewaak, which maintains data for individuals onboarding and offboarding from the client interface. Leveraged HTML, CSS, JavaScript, Typescript, and Angular to create a robust and user-friendly client interface.
                    Developed a new admin panel, improving internal operating efficiency by over 95%.`
    }
  ];

  education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Electronics and Communication Engineering',
      institution: 'Pace Institute of Technology and Sciences, Ongole',
      year: '2015 – 2019'
    }
  ];

  languages = [
    { language: 'English', proficiency: 'Full Professional Proficiency' },
    { language: 'Hindi', proficiency: 'Professional Working Proficiency' },
    { language: 'Telugu', proficiency: 'Full Professional Proficiency' }
  ];

  interests = ['Music', 'Playing Cricket and Badminton'];

  constructor() {}

  ngOnInit(): void {}

  async downloadPDF(): Promise<void> {
    if (typeof window !== 'undefined') {
      // Dynamically import html2pdf.js in the browser environment
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = document.querySelector('.resume-container');

      const options = {
        margin: 0.5,
        filename: 'Venkat_Narayana_Kothakota_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf()
        .from(element)
        .set(options)
        .save();
    }
  }
}
