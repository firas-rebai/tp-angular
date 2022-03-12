import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../assets/Shared/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  idContact : any;
  contact : Contact;
  constructor(private ContactService : ContactService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.idContact = res.get('id');
    })
    this.contact = this.ContactService.getContactsById(this.idContact);
  }

  onContacts(){
    this.router.navigate(['/contacts']);
  }
}
