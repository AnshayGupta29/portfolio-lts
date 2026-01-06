import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../services/auth.service';

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
  captcha: string = '';
  captchaInput: string = '';
  otp: string = '';
  
  isOtpSent: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router: Router, 
    private messageService: MessageService,
    private ngZone: NgZone,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    this.captcha = code;
    this.captchaInput = '';
  }

  sendOtp() {
    if (!this.phoneNumber) {
      this.messageService.add({ severity: 'warn', summary: 'Missing Phone', detail: 'Please enter your phone number' });
      return;
    }

    if (!this.captchaInput) {
      this.messageService.add({ severity: 'warn', summary: 'Missing Captcha', detail: 'Please enter the captcha' });
      return;
    }

    if (this.captchaInput.trim().toUpperCase() !== this.captcha.toUpperCase()) {
      this.messageService.add({ severity: 'error', summary: 'Invalid Captcha', detail: 'Captcha does not match' });
      this.generateCaptcha();
      return;
    }

    this.isLoading = true;
    this.authService.sendOtp({ phoneNumber: this.phoneNumber }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.isOtpSent = true;
        this.messageService.add({ severity: 'success', summary: 'OTP Sent', detail: res.message });
      },
      error: () => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send OTP' });
      }
    });
  }

  verifyOtp() {
    if (!this.otp || this.otp.trim().length < 4) {
      return;
    }

    this.isLoading = true;

    this.authService.verifyOtp({ phoneNumber: this.phoneNumber, otp: this.otp }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        localStorage.setItem('auth_token', res.token);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        this.router.navigate(['/about']);
      },
      error: () => {
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid OTP' });
      }
    });
  }
}
