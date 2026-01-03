import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'pi pi-code', level: 90, color: '#dd0031' },
    { name: 'TypeScript', icon: 'pi pi-code', level: 85, color: '#3178c6' },
    { name: 'PrimeNG', icon: 'pi pi-box', level: 95, color: '#2196f3' },
    { name: 'Node.js', icon: 'pi pi-server', level: 80, color: '#68a063' },
    { name: 'HTML/CSS', icon: 'pi pi-desktop', level: 95, color: '#e34f26' },
    { name: 'Git & GitHub', icon: 'pi pi-github', level: 85, color: '#333' },
    { name: 'Docker', icon: 'pi pi-box', level: 70, color: '#2496ed' },
    { name: 'SQL/NoSQL', icon: 'pi pi-database', level: 75, color: '#f29111' }
  ];
}
