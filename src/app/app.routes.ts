import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';
import { Admin } from './pages/admin/admin';
import { AdminLogin } from './pages/admin-login/admin-login';
import { authGuard } from './guards/auth.guard';


// export const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'about', component: About },
//   { path: 'skills', component: Skills },
//   { path: 'projects', component: Projects },
//   { path: 'experience', component: Experience },
//   { path: 'contact', component: Contact },
//   { path: 'admin',component: Admin},
//   { path: 'admin-login', component: AdminLogin },
//   { path: 'admin',component: Admin,canActivate: [authGuard]}

// ];

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'skills', component: Skills },
    { path: 'projects', component: Projects },
    { path: 'experience', component: Experience },
    { path: 'contact', component: Contact },
  
    { path: 'admin-login', component: AdminLogin },
  
    {
      path: 'admin',
      component: Admin,
      canActivate: [authGuard]
    }
  ];