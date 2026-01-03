import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'NR Service Frontend Portal - VAHAN eTransport (NIC)',
      description: 'Built and optimized the Angular-based portal ensuring responsive design and seamless backend integration. Implemented Docker support for scalable, containerized deployments.',
      image: 'assets/project1.jpg', // Placeholder, user can update
      tags: ['Angular', 'Docker', 'Responsive Design'],
      link: 'https://github.com/AnshayGupta29'
    },
    {
      title: 'PAIDNR Portal - VAHAN eTransport (NIC)',
      description: 'Developed intuitive user interfaces and integrated REST APIs for dynamic data handling using Angular. Improved user experience and ensured robust, on-time project delivery.',
      image: 'assets/project2.jpg', // Placeholder
      tags: ['Angular', 'REST APIs', 'UI/UX'],
      link: 'https://github.com/AnshayGupta29'
    },
    {
      title: 'Plagiarism Detection System',
      description: 'Developed a web-based plagiarism detection tool using Python and Flask to analyze text and image file similarities. Designed an interactive GUI with HTML, CSS, and JavaScript. Implemented algorithms to quantify and image files, enhancing content originality verification.',
      image: 'assets/project3.jpg', // Placeholder
      tags: ['Python', 'Flask', 'NLTK', 'Spacy', 'HTML/CSS/JS'],
      link: 'https://github.com/AnshayGupta29'
    },
    {
      title: 'Attendance System using Face Recognition',
      description: 'Worked on the project on attendance system using face recognition and developed it using Python and OpenCV. It is developed to record the attendance with the help of web camera. OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library.',
      image: 'assets/project4.jpg', // Placeholder
      tags: ['Python', 'OpenCV', 'Face Recognition', 'Machine Learning'],
      link: 'https://github.com/AnshayGupta29'
    }
  ];
}
