import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  @Output()
  questionSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteQuestion.emit(this.question);
  }

  selectQuestion(): void {
    this.questionSelected.emit(true);
  }

}
