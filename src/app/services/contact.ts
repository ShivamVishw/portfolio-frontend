import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Contact {

  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  

  sendMessage(data: any) {
    return this.http.post(this.apiUrl, data, {
      responseType: 'text'
    });
  }

  // getAllMessages() {
  //   return this.http.get<any[]>(`${this.apiUrl}/messages`);
  // }

  getAllMessages() {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(
      `${this.apiUrl}/messages`,
      { headers }
    );
  }
  

  // deleteMessage(id: number) {
  //   return this.http.delete(
  //     `${this.apiUrl}/${id}`,
  //     { responseType: 'text' }
  //   );
  // }

  deleteMessage(id: number) {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.delete(
      `${this.apiUrl}/${id}`,
      {
        headers,
        responseType: 'text'
      }
    );
  }

}