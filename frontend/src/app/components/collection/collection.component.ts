import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  questions: any;

  constructor(private qService: QuestionService) { }

  ngOnInit(): void {
    this.qService.getAll().subscribe(data => {
      this.questions = data;
    }, error => {
      console.log(error);
    });
  }

}
