import { CONTCATS } from '../../assets/Shared/contacts';
import { Contact } from '../../assets/Shared/contact';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts : Contact[] = CONTCATS
  constructor() { }
  getContacts():Contact[]{
    return this.contacts;
  }
  getContactsById(id : number):Contact{
    return this.contacts.find(Contact => Contact.id == id);
  }

  deleteContactByID(id : number):Contact[]{
    const indice = this.contacts.findIndex(Contact => Contact.id == id);
    return this.contacts.splice(indice,1);
    
  }
}