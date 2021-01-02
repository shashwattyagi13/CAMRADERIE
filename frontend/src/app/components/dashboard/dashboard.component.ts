
import { QuestionService } from './../../services/question.service';
import { DatePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  myDate: string;
  form: any = {};
  errorMessage = '';
  question: any;
  allQuestions: any;
  

  constructor(private datePipe: DatePipe, private qService: QuestionService, private router: Router) {
    this.myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.qService.getAll().subscribe(data => {
      this.allQuestions = data;
    }, err => {
      this.errorMessage = err.error.message;
    });
  }

  onSubmit(): void {
    this.qService.create(this.form).subscribe(
      data => {
        this.question = data;
        this.ngOnInit();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
