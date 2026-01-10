import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) { }

  sendMessage(contactData: ContactRequest): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
