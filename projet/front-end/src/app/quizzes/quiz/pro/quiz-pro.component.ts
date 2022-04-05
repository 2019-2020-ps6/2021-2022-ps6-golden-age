import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../../models/quiz.model';

@Component({
  selector: 'app-quiz-pro',
  templateUrl: './quiz-pro.component.html',
  styleUrls: ['./quiz-pro.component.scss']
})
export class QuizProComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuiz.emit(this.quiz);
  }
}
