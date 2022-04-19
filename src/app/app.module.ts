import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GitprofileComponent } from './gitprofile/gitprofile.component';
import { GitrepoComponent } from './gitrepo/gitrepo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GitprofileComponent,
    GitrepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
