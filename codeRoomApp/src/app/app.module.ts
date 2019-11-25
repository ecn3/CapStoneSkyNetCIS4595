import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormatterComponent } from './formatter/formatter.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { CardComponent } from './card/card.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthGuard } from './core/auth.guard';
import { GroupPostsComponent } from './group-posts/group-posts.component';
import { HelpComponent } from './help/help.component';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormatterComponent,
    MyGroupsComponent,
    CreateGroupComponent,
    NavbarComponent,
    PostComponent,
    CardComponent,
    GroupPostsComponent,
    HelpComponent,
    PostViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAuwZ4icjVq2R37apLYhTQUtbeNB68eTO0",
      authDomain: "coderoom-capstone.firebaseapp.com",
      databaseURL: "https://coderoom-capstone.firebaseio.com",
      projectId: "coderoom-capstone",
      storageBucket: "coderoom-capstone.appspot.com",
      messagingSenderId: "487034406062",
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
