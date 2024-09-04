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
    title = 'UI Developer';
    location = 'Hyderabad, India';
    linkedin = 'https://www.linkedin.com/in/venkat-narayana-kothakota-5b28a01a1';
    email = 'kothakotavenkatnarayana@gmail.com';
    phone = '+91 8179518097';
  
    summary = `UI Developer with 3+ years of experience designing and implementing user-centric interfaces. Skilled in HTML, CSS, JavaScript, and Angular, with a solid understanding of responsive design and accessibility standards. Demonstrated success in collaborating with cross-functional teams to enhance user experiences. Proven track record of delivering high-quality, engaging interfaces that improve user satisfaction and drive project success.`;
  
    experiences = [
      {
        role: 'UI Developer',
        company: 'Tata Consultancy Services',
        location: 'Hyderabad, India',
        period: '2023 - Present',
        description: `<ul>
                         <li>Created and optimized user interfaces for websites and applications, collaborating with designers and backend developers to enhance integration, functionality, and user experience, resulting in a 20% improvement in user engagement.</li>
                         <li>Designed and implemented intuitive user interfaces for three web applications, leading to a 40% decrease in user support inquiries and improving functionality for over 500 daily active users.</li>
                         <li>Led the incorporation of front-end technologies to enhance user interactions across more than 10 web applications, optimizing performance and reducing page load time by 15 seconds.</li>
                         <li>Executed thorough testing and debugging of UI components and API integrations, identifying and resolving issues to improve performance and ensure seamless functionality, reducing bugs by 40%.</li>
                         <li>Utilized HTML, CSS, and JavaScript to design and implement responsive and interactive UI elements, enhancing user engagement and improving site responsiveness by 30%.</li>
                       </ul>`
      },
      {
        role: 'Frontend Developer',
        company: 'Capgemini',
        location: 'Hyderabad, India',
        period: '2021 - 2023',
        description: `<ul>
                         <li>Implemented responsive design and optimized website performance using HTML, CSS, and JavaScript, leading to a 25% increase in page load speed and improved user satisfaction.</li>
                         <li>Proactively stayed up-to-date with industry trends and best practices in front-end development, continuously enhancing skills and adopting emerging technologies to drive innovation and maintain a competitive edge.</li>
                         <li>Created custom components using Angular, which enhanced design consistency across five different projects; this approach reduced development time for future features by an estimated 30 hours per project on average.</li>
                         <li>Developed unit tests for UI elements to ensure functionality before deployment; achieving zero bugs reported post-launch among more than ten applications released during a two-year period.</li>
                       </ul>`
      }
    ];
    
  
    skills = [
      'Proficiency in HTML and CSS',
      'Skilled in JavaScript, TypeScript, and Angular',
      'Experience with Vue.js and Bootstrap',
      'Knowledge of agile software development methodology',
      'Proficient in UI Design and Problem Solving',
      'Expertise in Front-End Development',
      'Familiarity with Responsive Web Design'
    ];
  
    education = [
      {
        degree: 'Electronics and Communication Engineering',
        field: 'PACE Institute of Technology and Sciences',
        institution: 'GPA: 6.5',
        year: '2015 - 2019'
      },
      {
        degree: 'Intermediate',
        field: 'Sri Pratibha Junior College',
        institution: 'GPA: 7.4',
        year: '2013 - 2015'
      }
    ];
  
    languages = [
      { language: 'English', proficiency: 'Fluent' }
    ];
  
    interests = [
      'Web Development',
      'UI/UX Design',
      'Technology Trends'
    ];
  

  

  constructor() {}

  ngOnInit(): void {}

  async downloadPDF(): Promise<void> {
    if (typeof window !== 'undefined') {
      // Dynamically import html2pdf.js in the browser environment
      const html2pdf = (await import('html2pdf.js')).default;
  
      // Temporarily hide the download button
      const downloadButton = document.querySelector('.download-button');
      if (downloadButton) {
        downloadButton.classList.add('hidden');
      }
  
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
        .save()
        .finally(() => {
          // Re-show the download button
          if (downloadButton) {
            downloadButton.classList.remove('hidden');
          }
        });
    }
  }
  
  
}
