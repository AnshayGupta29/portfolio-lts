import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginPayload {
  phoneNumber: string;
}

interface VerifyPayload {
  phoneNumber: string;
  otp: string;
}

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  sendOtp(payload: LoginPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/login`, payload);
  }

  verifyOtp(payload: VerifyPayload): Observable<{ message: string; token: string }> {
    return this.http.post<{ message: string; token: string }>(`${this.baseUrl}/verify`, payload);
  }

  resendOtp(payload: LoginPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/resend`, payload);
  }
}
