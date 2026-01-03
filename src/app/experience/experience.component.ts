import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  workExperiences = [
    {
      company: 'Akiko Sherman Infotech Pvt. Ltd.',
      role: 'Software Developer',
      period: 'Oct 2024 — Present',
      location: 'New Delhi, Delhi, India',
      description: [
        'Built and optimized the Angular-based portal ensuring responsive design and seamless backend integration.',
        'Implemented Docker support for scalable, containerized deployments.',
        'Developed and enhanced NR Service Frontend Portal (VAHAN eTransport, NIC) using Angular.',
        'Designed responsive UIs, integrated APIs, and ensured cross-device consistency.',
        'Added Docker support for containerization, boosting deployment efficiency.',
        'Collaborated with DevOps to streamline CI/CD pipelines.',
        'Conducted unit testing and debugging for application reliability.'
      ],
      techStack: ['Angular', 'TypeScript']
    },
    {
      company: 'SimarTech Consultancy Pvt. Ltd',
      role: 'Programmer',
      period: 'Jan 2024 — Sep 2024',
      location: 'New Delhi, Delhi, India',
      description: [
        'Developed the PAIDNR Portal (VAHAN eTransport, NIC) using Angular.',
        'Built user-friendly UIs, integrated APIs, and ensured responsive design.',
        'Provided technical documentation and user support.'
      ],
      techStack: ['Angular', 'TypeScript']
    }
  ];

  internships = [
    {
      company: 'Defence Research & Development Organisation (DRDO)',
      role: 'Software Developer Intern',
      period: '07/2022 – 09/2022',
      location: 'New Delhi, Delhi, India',
      description: [
        'Designed and implemented a web-based Plagiarism Checker using Python (Flask) for the backend and HTML, CSS, JavaScript for the frontend.',
        'Built a robust algorithm for text similarity detection by integrating natural language processing (NLP) libraries such as NLTK and Spacy.',
        'Connected the application with document storage systems to enable multi-format (PDF, DOCX, TXT) file uploads for analysis.',
        'Assisted in drafting technical documentation and user manuals for the plagiarism checker tool.',
        'Collaborated with senior researchers and engineers to gather requirements and validate tool accuracy.',
        'Enhanced application performance by implementing efficient text comparison algorithms to handle large document sets.',
        'Conducted rigorous testing to identify and resolve bugs, ensuring a stable and reliable system for users.'
      ],
      techStack: ['Python', 'Flask', 'NLTK', 'Spacy', 'HTML/CSS/JS']
    },
    {
      company: 'Netaji Subhas University of Technology',
      role: 'Internship Student',
      period: '06/2021 – 06/2021',
      location: 'New Delhi, Delhi, India',
      description: [
        'Worked on the project on PLAGIARISM DETECTION and developed it using Python and Flask. Have also used html CSS and JavaScript for GUI development. The objective of this project is to check similarity of the file that how much someone has copied the TXT.',
        'Worked on the project on attendance system using face recognition and developed it using Python and OpenCV. It is developed to record the attendance with the help of web camera. OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library.'
      ],
      techStack: ['Python', 'Flask', 'OpenCV', 'HTML/CSS/JS']
    }
  ];
}
