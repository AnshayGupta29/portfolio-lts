import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, InputTextarea, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isLoading: boolean = false;

  contactInfo = {
    email: 'guptaanshay@gmail.com',
    phone: '+91 9560850428',
    phoneValue: '+918178465672'
  };

  socialLinks = [
    { platform: 'GitHub', icon: 'pi pi-github', url: 'https://github.com/AnshayGupta29' },
    { platform: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://linkedin.com/in/anshay-gupta-67b136166' },
    { platform: 'Facebook', icon: 'pi pi-facebook', url: 'https://www.facebook.com/' },
    { platform: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/' },
    { platform: 'WhatsApp', icon: 'pi pi-whatsapp', url: 'https://wa.me/919560850428' }
  ];

  constructor(
    private messageService: MessageService,
    private contactService: ContactService
  ) {}

  sendMessage() {
    const name = (this.name || '').trim();
    const email = (this.email || '').trim();
    const message = (this.message || '').trim();

    if (!name || !email || !message) {
      this.messageService.add({ severity: 'warn', summary: 'Missing Fields', detail: 'Please fill in all fields' });
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      this.messageService.add({ severity: 'warn', summary: 'Invalid Email', detail: 'Please enter a valid email address' });
      return;
    }

    this.isLoading = true;

    this.contactService.sendMessage({ name, email, message }).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully!' });
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error sending message:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message. Please try again later.' });
      }
    });
  }
}
