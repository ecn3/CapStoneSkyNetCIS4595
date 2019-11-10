import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormatterComponent } from './formatter/formatter.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'formatter', component: FormatterComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'my_groups', component: MyGroupsComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
