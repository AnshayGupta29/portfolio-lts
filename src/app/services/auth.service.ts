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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  sendOtp(payload: LoginPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/login`, payload);
  }

  verifyOtp(payload: VerifyPayload): Observable<{ message: string; token: string }> {
    return this.http.post<{ message: string; token: string }>(`${this.baseUrl}/verify`, payload);
  }
}
