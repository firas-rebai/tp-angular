import { AuthService } from './../services/auth.service';
import { personService } from './personService';
import { Component, OnInit } from '@angular/core';
import { personne } from './personne';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  personnes : Array<personne> = [];

  constructor(private service : personService) {  }

  ngOnInit(): void {
    this.personnes = this.service.getPersons();
  }

}
