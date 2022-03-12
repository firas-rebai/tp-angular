import { AboutService } from './../services/about.service';
import { Component, OnInit } from '@angular/core';
import { comment } from '../../assets/Shared/comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: any;

  Comment: comment = { id: 0, message: '', date: null };
  comments : comment[];
  newComment = false;
  constructor(private AboutService: AboutService) { }
  addComment() {
    if (this.Comment.message != '') {
      this.AboutService.addComment({
        id : this.Comment.id ,
        message : this.Comment.message,
        date : this.Comment.date
      })
      this.Comment.message = "";
    }
  }


  ngOnInit(): void {
    this.info = this.AboutService.getInfos();
    this.comments = this.AboutService.getAllComments();
  }

}
