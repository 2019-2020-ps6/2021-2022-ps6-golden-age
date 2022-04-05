import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../../models/quiz.model';

@Component({
  selector: 'app-quiz-user',
  templateUrl: './quiz-user.component.html',
  styleUrls: ['./quiz-user.component.scss']
})
export class QuizUserComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectQuiz(): void {
    this.quizSelected.emit(true);
  }
}
