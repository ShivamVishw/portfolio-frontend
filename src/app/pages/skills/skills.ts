import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = {
    backend: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate',
      'JPA',
      'REST APIs',
      'JWT'
    ],
    frontend: [
      'Angular',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap'
    ],
    database: [
      'MySQL',
      'MsSQL',
      'MongoDB'
    ],
    tools: [
      'Git',
      'GitHub',
      'Postman'
    ]
  };
}
