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
      name: 'TELEFONICA', 
      description: `<p>
  In this project, I had the key responsibility as a <strong>**UI Developer**</strong> at TELEFONICA, where I played a critical role in shaping and delivering a comprehensive application interface for telecom data management.<br><br>
  
  My primary focus was on designing and implementing a user interface that was both functional and aesthetically pleasing, ensuring seamless interaction with the backend and enhancing the overall user experience.<br><br>

  <strong>**Responsibilities and Achievements**</strong>:<br><br>

  - <strong>**UI Design Leadership**</strong>: Led the design and development of a sophisticated user interface, crucial for handling complex telecom data. My approach was centered on creating an intuitive and responsive design that catered to diverse user needs and scenarios.<br><br>
  
  - <strong>**Development of Core Functional Tabs**</strong>:
    - <strong>**Mobile Site Tab**</strong>: Crafted a specialized interface for analyzing and visualizing mobile site data, ensuring clarity and ease of use.
    - <strong>**Carrier Tab**</strong>: Developed a user-friendly UI for accessing and managing carrier-related information, with a focus on functionality and usability.
    - <strong>**Redundancy Check Tab**</strong>: Designed an interactive component to assess and display redundancy data, making complex information accessible and actionable.<br><br>
  
  - <strong>**Advanced Popup Interface**</strong>: Engineered an editable popup feature that significantly improved user interaction by allowing real-time data edits and updates. This feature facilitated better user engagement and data accuracy.<br><br>
  
  - <strong>**ESC Settings Matrix**</strong>: Implemented a well-organized settings matrix for ESC configurations. This section was designed to offer a clear and manageable interface for users to handle various settings and configurations.<br><br>
  
  - <strong>**Nokia 2G Settings Management**</strong>: Developed a robust UI for displaying and managing Nokia 2G settings. This involved creating interactive tables with functionalities for editing, updating, deleting records, and applying search filters. The UI was designed for efficiency and ease of use.<br><br>
  
  - <strong>**Comprehensive Table Management**</strong>: Designed and integrated multiple tables and forms that interacted with the backend through APIs. Implemented features for real-time data updates, ensuring accuracy and timely information. Focused on secure authentication and data integrity.<br><br>
  
  - <strong>**User-Centric Design**</strong>: Emphasized a user-centered design approach to ensure that the interface was not only functional but also provided a pleasant and efficient user experience. This included optimizing the UI for various devices and user scenarios.<br><br>
  
  My contributions were instrumental in creating a well-structured and user-friendly application, enhancing the efficiency of telecom data management and providing a modern, interactive experience for users.
</p>
`,
      role: 'UI Develpoer',  // Add the role property
      organization: 'TATA CONSULTENCY SERVICE',  // Add the organization property
        logo: 'assets/Telefonica.png'
    },
    {
      name: 'ABN AMRO',
      organization: 'Capgemini',
      role: 'Front End Developer',
      description: `
      <p>
        In this project, I played a key role as a Front-End Developer, contributing to the creation of a dynamic and responsive banking application for ABN AMRO.<br><br>
        The application featured role-based login functionality, which allowed admin, operations team, and engagement managers to access different user interfaces tailored to their specific roles.<br><br>
        Key front-end features I implemented include:<br><br>
        
        - <strong>Role-based Conditional Rendering</strong>: Ensured that different user roles only had access to specific UI components based on their permissions, enhancing both security and user experience.<br><br>
        - <strong>Dynamic Forms and Tables</strong>: Developed dynamic forms for data entry and interactive tables for displaying transaction data, customized based on the user's role.<br><br>
        - <strong>Graphical Data Representation</strong>: Integrated visual data representation tools (charts, graphs) to display real-time banking data for better insights and reporting.<br><br>
        - <strong>API Integration</strong>: Worked on seamless integration with various backend APIs to fetch, update, and display critical banking information.<br><br>
        - <strong>Responsive UI</strong>: Ensured the UI was responsive across devices, delivering an optimized experience for desktop and mobile users.<br><br>
        
        This project helped streamline banking operations by delivering a well-structured, role-based interface with modern, intuitive designs and real-time data capabilities.
      </p>
    `,
    
      logo:  'assets/abn1.png' 
    }
    
    // Add more projects here
  ];

  showDescription = false;
  currentDescription = '';

  openDescription(description: string) {
    this.currentDescription = description;
    this.showDescription = true;
  }

  closeDescription() {
    this.showDescription = false;
  }
}
