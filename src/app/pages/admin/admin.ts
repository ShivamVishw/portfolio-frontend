import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact as ContactService } from '../../services/contact';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'] 
})
export class Admin implements OnInit {

  messages: any[] = [];

  constructor(
    private contactService: ContactService,
    private cdr: ChangeDetectorRef // 1. Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ADMIN LOADED');
    this.loadMessages();
  }

  loadMessages() {
    this.contactService.getAllMessages().subscribe({
      next: (data: any) => {
        console.log('API DATA:', data);

        // Safely extract the array
        if (Array.isArray(data)) {
          this.messages = data;
        } else if (data && data.content) {
          this.messages = data.content; 
        } else if (data && data._embedded) {
          this.messages = data._embedded.messages; 
        } else {
          this.messages = data;
        }

        // 2. Explicitly force Angular to update the HTML immediately
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error fetching messages:', err);
      }
    });
  }

  // deleteMessage(id: number) {
  //   this.contactService.deleteMessage(id).subscribe(() => {
  //     this.loadMessages(); 
  //   });
  // }

  deleteMessage(id: number) {

    if(confirm('Delete this message?')) {
  
      this.contactService.deleteMessage(id)
        .subscribe(() => {
          this.loadMessages();
        });
  
    }
  }

  logout() {

    localStorage.removeItem('token');
  
    window.location.href = '/admin-login';
  
  }
}