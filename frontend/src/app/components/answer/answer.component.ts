import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  question: any;
  form: any = {};
  errorMessage = '';
  answer: any;

  constructor(private router: Router) {
    this.question = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
  }

}
