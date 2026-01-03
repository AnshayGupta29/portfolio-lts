import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  phoneNumber: string = '';
  otp: string = '';
  
  isOtpSent: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private messageService: MessageService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
  }

  async sendOtp() {
    if (!this.phoneNumber) {
      this.messageService.add({ severity: 'warn', summary: 'Missing Phone', detail: 'Please enter your phone number' });
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
        this.isLoading = false;
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Firebase has been removed. Auth is disabled.' });
        // this.isOtpSent = true; // Uncomment to test UI flow
    }, 1000);
  }

  async verifyOtp() {
    if (!this.otp) {
      return;
    }

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
        this.isLoading = false;
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Firebase has been removed. Auth is disabled.' });
    }, 1000);
  }
}
