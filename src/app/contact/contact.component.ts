import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../assets/Shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  param1 : any;
  param2 : any;

  constructor(private router : Router,private ContactService : ContactService) { }
  contacts : Contact[];
  ngOnInit(): void {
    this.contacts = this.ContactService.getContacts();
  }

  onDelete(id : number){
    this.ContactService.deleteContactByID(id);
  }



  onAbout(){
    this.router.navigate(['/about'])
  }

}
