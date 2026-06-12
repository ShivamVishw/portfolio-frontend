import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.html'
})
export class AdminLogin {

  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

    this.http.post<any>(
      'https://portfolio-backend-production-b385.up.railway.app/api/auth/login',
      {
        email: this.email,
        password: this.password
      }
    ).subscribe({

      next: (res) => {

        localStorage.setItem(
          'token',
          res.token
        );

        this.router.navigate(['/admin']);
      },

      error: () => {

        alert('Invalid Credentials');

      }

    });

  }

  

}