import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/27-12-2025.pdf';
    link.download = 'Anshay_Gupta_Resume.pdf';
    link.click();
  }
}
