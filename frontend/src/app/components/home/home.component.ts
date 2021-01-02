import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  question = {
    title: ''
  };

  submitted = false;

  constructor(private qService: QuestionService) { }

  ngOnInit(): void {
  }

  saveQuestion(): void {
    const data = {
      title: this.question.title
    };

    this.qService.create(data).subscribe(response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newQuestion(): void {
    this.submitted = false;
    this.question = {
      title: '',
    };
  }
}
