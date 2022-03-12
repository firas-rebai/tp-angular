
import { Injectable } from '@angular/core';
import { comment } from '../../assets/Shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info = {
    name: "Youssef Chaabi",
    email: "youssefchaabi@gmail.com",
    tel: "90314256"
  }
  comments: comment[] = [];
  getInfos() {
    return this.info;
  }
  constructor() { }
  getAllComments() {
    return this.comments;
  }
  addComment(c : comment) {
    c.date = new Date();
    this.comments.push(c);
  }
}
