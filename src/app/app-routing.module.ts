import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  {path : 'about' ,canActivate : [AuthGuard],component : AboutComponent },
  {path : 'contacts' ,canActivate : [AuthGuard], component : ContactComponent},
  {path : 'contacts/:id',canActivate : [AuthGuard] , component : ContactDetailComponent},
  {path : 'signin' , component : SigninComponent },
  {path : 'home' ,canActivate : [AuthGuard], component : HomeComponent},
  {path : '**' , component : NotFoundComponent},
  {path : '' , redirectTo : '/home' ,pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
