import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormatterComponent } from './formatter/formatter.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { PostComponent } from './post/post.component';
import { CreateGroupComponent } from  './create-group/create-group.component'
import { GroupPostsComponent } from  './group-posts/group-posts.component'
import { HelpComponent } from  './help/help.component'
import { PostViewComponent } from  './post-view/post-view.component'



import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'home/create_group', component: CreateGroupComponent, canActivate: [AuthGuard] },
  { path: 'home/my_groups', component: MyGroupsComponent, canActivate: [AuthGuard] },
  { path: 'formatter', component: FormatterComponent , canActivate: [AuthGuard]}, 
  { path: 'login', component: LoginComponent }, 
  { path: 'my_groups', component: MyGroupsComponent, canActivate: [AuthGuard] }, 
  { path: 'create_group', component: CreateGroupComponent, canActivate: [AuthGuard] }, 
  { path: 'group_posts', component: GroupPostsComponent, canActivate: [AuthGuard] }, 
  { path: 'post', component: PostComponent, canActivate: [AuthGuard] }, 
  { path: 'post_view', component: PostViewComponent, canActivate: [AuthGuard] }, 
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
