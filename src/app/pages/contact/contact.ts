import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Contact as ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;

  constructor(private contactService: ContactService) {}

  sendMessage(form: NgForm) {

    this.isLoading = true;
  
    this.contactService.sendMessage(this.contactData).subscribe({
  
      next: () => {
  
        this.isLoading = false;
  
        form.resetForm();
  
        alert('Message Sent Successfully!');
      },
  
      error: (error) => {
  
        this.isLoading = false;
  
        console.error(error);
  
        alert('Failed to send message');
      }
  
    });
  }
}
