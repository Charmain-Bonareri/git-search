import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GitprofileComponent } from './gitprofile/gitprofile.component';
import { GitrepoComponent } from './gitrepo/gitrepo.component';
import { UserService } from './user.service';
import { RepoService } from './repo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GitprofileComponent,
    GitrepoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
