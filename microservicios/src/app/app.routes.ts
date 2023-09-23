import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'update-student',
    loadComponent: () => import('./pages/update-student/update-student.page').then( m => m.UpdateStudentPage)
  },
];
