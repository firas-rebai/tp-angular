import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';
import { AboutService } from './services/about.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    SigninComponent,
    HomeComponent,
    ContactDetailComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AboutService, ContactService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
