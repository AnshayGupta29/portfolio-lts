import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/about'
      },
      {
        label: 'Education',
        icon: 'pi pi-book',
        routerLink: '/education'
      },
      {
        label: 'Skills',
        icon: 'pi pi-star',
        routerLink: '/skills'
      },
      {
        label: 'Experience',
        icon: 'pi pi-briefcase',
        routerLink: '/experience'
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        routerLink: '/projects'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      }
    ];
  }

  scrollTo(elementId: string) {
    // Deprecated in favor of routerLink
  }
}
