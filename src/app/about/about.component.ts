import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  downloadResume() {
    const doc = new jsPDF();

    // Layout constants
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const leftColX = 15;
    const leftColWidth = 55; // Slightly narrower
    const rightColX = 80;
    const rightColWidth = 115;
    const gutter = 5;
    
    let leftY = 20;
    let rightY = 20;

    // --- Right Column Header (Name & Title) ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.setTextColor(27, 59, 111); // Deep Blue
    doc.text('Anshay Gupta', rightColX, rightY);
    rightY += 8;

    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100); // Grey
    doc.setFont('helvetica', 'normal');
    doc.text('Software Developer', rightColX, rightY);
    rightY += 15;

    // Draw Divider Line
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(leftColX + leftColWidth + gutter, 15, leftColX + leftColWidth + gutter, pageHeight - 15);

    // --- Left Column Content ---
    
    // 1. Contact
    doc.setFontSize(12);
    doc.setTextColor(27, 59, 111);
    doc.setFont('helvetica', 'bold');
    doc.text('CONTACT', leftColX, leftY);
    leftY += 6;
    
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'normal');
    
    const contactInfo = [
      '+91 9560850428',
      'guptaanshay@gmail.com',
      'New Delhi, India',
      'linkedin.com/in/anshay-gupta',
      'github.com/AnshayGupta29'
    ];
    
    contactInfo.forEach(item => {
      // Split long text if needed (like URLs)
      const lines = doc.splitTextToSize(item, leftColWidth);
      doc.text(lines, leftColX, leftY);
      leftY += 4 * lines.length + 2;
    });
    
    leftY += 5;

    // 2. Education
    doc.setFontSize(12);
    doc.setTextColor(27, 59, 111);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', leftColX, leftY);
    leftY += 6;

    const education = [
      {
        degree: 'B.Tech. (CSE)',
        institute: 'HMR Institute of Technology and Management',
        period: '2020 — 2023',
        score: 'CGPA: 8.438'
      },
      {
        degree: 'Diploma (CSE)',
        institute: 'Puran Murti Campus',
        period: '2017 — 2020',
        score: 'Score: 64%'
      }
    ];

    education.forEach(edu => {
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      const degreeLines = doc.splitTextToSize(edu.degree, leftColWidth);
      doc.text(degreeLines, leftColX, leftY);
      leftY += 4 * degreeLines.length;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      const instLines = doc.splitTextToSize(edu.institute, leftColWidth);
      doc.text(instLines, leftColX, leftY);
      leftY += 4 * instLines.length;
      
      doc.text(edu.period, leftColX, leftY);
      leftY += 4;
      doc.text(edu.score, leftColX, leftY);
      leftY += 8;
    });
    
    leftY += 2;

    // 3. Skills
    doc.setFontSize(12);
    doc.setTextColor(27, 59, 111);
    doc.setFont('helvetica', 'bold');
    doc.text('SKILLS', leftColX, leftY);
    leftY += 6;

    const skills = [
      'Angular', 'TypeScript', 'JavaScript',
      'Node.js', 'HTML5/CSS3', 'SCSS',
      'Tailwind CSS', 'PrimeNG',
      'Git / GitHub', 'Docker',
      'SQL / NoSQL'
    ];

    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'normal');
    
    skills.forEach(skill => {
        doc.text(`• ${skill}`, leftColX, leftY);
        leftY += 5;
    });

    leftY += 5;

    // 4. Internships (Moved to Left Column for balance)
    doc.setFontSize(12);
    doc.setTextColor(27, 59, 111);
    doc.setFont('helvetica', 'bold');
    doc.text('INTERNSHIPS', leftColX, leftY);
    leftY += 6;

    const internships = [
      {
        company: 'DRDO',
        role: 'Software Developer Intern',
        period: '07/2022 – 09/2022',
        details: [
          'Designed web-based Plagiarism Checker using Python (Flask).',
          'Built text similarity detection using NLP libraries.',
          'Enabled multi-format file uploads.'
        ]
      },
      {
        company: 'NSUT', // Shortened for left column
        role: 'Internship Student',
        period: '06/2021 – 06/2021',
        details: [
          'Worked on Plagiarism Detection project.',
          'Developed Attendance System using Face Recognition.'
        ]
      }
    ];

    internships.forEach(intern => {
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      const roleLines = doc.splitTextToSize(intern.role, leftColWidth);
      doc.text(roleLines, leftColX, leftY);
      leftY += 4 * roleLines.length;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      doc.text(`${intern.company} | ${intern.period}`, leftColX, leftY);
      leftY += 4;

      intern.details.forEach(detail => {
        const bullet = '• ';
        const lines = doc.splitTextToSize(bullet + detail, leftColWidth);
        doc.text(lines, leftColX, leftY);
        leftY += 3.5 * lines.length;
      });
      leftY += 4;
    });

    // --- Right Column Content ---
    
    // 1. Experience
    doc.setFontSize(14);
    doc.setTextColor(27, 59, 111);
    doc.setFont('helvetica', 'bold');
    doc.text('WORK EXPERIENCE', rightColX, rightY);
    rightY += 8;

    const experiences = [
      {
        company: 'Akiko Sherman Infotech Pvt. Ltd.',
        role: 'Software Developer',
        period: 'Oct 2024 — Present',
        location: 'New Delhi',
        details: [
          'Built and optimized Angular-based portal ensuring responsive design.',
          'Implemented Docker support for scalable, containerized deployments.',
          'Developed NR Service Frontend Portal (VAHAN eTransport, NIC).',
          'Designed responsive UIs, integrated APIs, and ensured cross-device consistency.',
          'Collaborated with DevOps to streamline CI/CD pipelines.'
        ]
      },
      {
        company: 'SimarTech Consultancy Pvt. Ltd',
        role: 'Programmer',
        period: 'Jan 2024 — Sep 2024',
        location: 'New Delhi',
        details: [
          'Developed the PAIDNR Portal (VAHAN eTransport, NIC) using Angular.',
          'Built user-friendly UIs, integrated APIs, and ensured responsive design.',
          'Provided technical documentation and user support.'
        ]
      }
    ];

    experiences.forEach(exp => {
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.role, rightColX, rightY);
      
      // Date on the right
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      const dateText = exp.period;
      const dateWidth = doc.getTextWidth(dateText);
      doc.text(dateText, pageWidth - 15 - dateWidth, rightY);
      
      rightY += 5;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(50, 50, 50);
      doc.text(`${exp.company}, ${exp.location}`, rightColX, rightY);
      rightY += 6;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      
      exp.details.forEach(detail => {
        const bullet = '• ';
        const lines = doc.splitTextToSize(bullet + detail, rightColWidth - 5);
        doc.text(lines, rightColX + 2, rightY);
        rightY += 4 * lines.length + 1;
      });
      rightY += 4;
    });

    rightY += 2;

    // 2. Projects
    doc.setFontSize(14);
    doc.setTextColor(27, 59, 111);
    doc.setFont('helvetica', 'bold');
    doc.text('PROJECTS', rightColX, rightY);
    rightY += 8;

    const projects = [
      {
        title: 'NR Service Frontend Portal - VAHAN eTransport (NIC)',
        description: 'Built and optimized the Angular-based portal ensuring responsive design and seamless backend integration. Implemented Docker support for scalable, containerized deployments.',
        tags: 'Angular, Docker, Responsive Design',
        link: 'github.com/AnshayGupta29'
      },
      {
        title: 'PAIDNR Portal - VAHAN eTransport (NIC)',
        description: 'Developed intuitive user interfaces and integrated REST APIs for dynamic data handling using Angular. Improved user experience and ensured robust, on-time project delivery.',
        tags: 'Angular, REST APIs, UI/UX',
        link: 'github.com/AnshayGupta29'
      },
      {
        title: 'Plagiarism Detection System',
        description: 'Developed a web-based plagiarism detection tool using Python and Flask to analyze text and image file similarities. Designed an interactive GUI with HTML, CSS, and JavaScript.',
        tags: 'Python, Flask, NLTK, Spacy',
        link: 'github.com/AnshayGupta29'
      },
      {
        title: 'Attendance System using Face Recognition',
        description: 'Worked on the project on attendance system using face recognition and developed it using Python and OpenCV. It is developed to record the attendance with the help of web camera.',
        tags: 'Python, OpenCV, Face Recognition',
        link: 'github.com/AnshayGupta29'
      }
    ];

    projects.forEach(proj => {
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      
      // Title might be long, check width or split
      const titleLines = doc.splitTextToSize(proj.title, rightColWidth - 40); // Leave room for tags if on same line, but tags are below now?
      // Actually, let's put title on its own line if needed, but previously we put tags on right.
      // With long titles, tags might overlap. Let's put tags below title or ensure title wraps.
      
      // Let's print title first.
      doc.text(titleLines, rightColX, rightY);
      
      // If title wraps, we need to account for it.
      // But we also have tags on the right. 
      // Let's move tags to be below title to be safe, or check width.
      
      // Alternative: Title on left, Tags on right (aligned to top of title)
      // If title is long, it will wrap. Tags should be consistently placed?
      // Let's just put tags on the next line to be safe and clean.
      
      const titleHeight = 5 * titleLines.length;
      rightY += titleHeight;

      // Tags line
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(80, 80, 80);
      doc.text(proj.tags, rightColX, rightY);
      rightY += 4;
      
      // Description
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      
      const lines = doc.splitTextToSize(proj.description, rightColWidth - 5);
      doc.text(lines, rightColX + 2, rightY);
      rightY += 3.5 * lines.length + 3;
    });

    doc.save('Anshay_Gupta_Resume.pdf');
  }
}
