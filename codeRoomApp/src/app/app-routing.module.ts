import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormatterComponent } from './formatter/formatter.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'formatter', component: FormatterComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
