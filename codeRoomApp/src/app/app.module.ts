import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { FormatterComponent } from './formatter/formatter.component';
import { HomeComponent } from './home/home.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { HelpComponent } from './help/help.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { GroupPostsComponent } from './group-posts/group-posts.component';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    FormatterComponent,
    HomeComponent,
    CreateGroupComponent,
    HelpComponent,
    MyGroupsComponent,
    GroupPostsComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
