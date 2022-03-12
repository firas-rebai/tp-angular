import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isAuth : boolean;
  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
    this.isAuth = this.AuthService.isAuth;
  }
  onSignIn(){
    this.AuthService.signIn();
    this.isAuth = this.AuthService.isAuth;
  }

  onSignOut(){
    this.AuthService.signOut();
    this.isAuth = this.AuthService.isAuth;
  }

}
