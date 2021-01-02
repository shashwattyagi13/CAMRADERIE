import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  questions: any;
  currentQuestion = null;
  currentIndex = -1;
  title = '';
  check: boolean = false;

  constructor(private qService: QuestionService) { }

  ngOnInit(): void {
  }

  setActiveQuestion(question, index): void {
    this.currentQuestion = question;
    this.currentIndex = index;
  }

  searchTitle(): void {
    if (this.title === '') {
      this.check = false;
      this.currentQuestion = null;
    }
    else {
      this.qService.findByTitle(this.title)
        .subscribe(
          data => {
            this.questions = data;
            this.check = true;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  }
}
