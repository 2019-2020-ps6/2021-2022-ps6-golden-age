import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {Question} from '../../../models/question.model';
import {QUIZ_LIST} from '../../../mocks/quiz-list.mock';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuizComponent implements OnInit {
  /*@Input()
  quiz: Quiz;*/

  quiz = QUIZ_LIST.pop();

  @Output()
  questionSelected: EventEmitter<Question> = new EventEmitter<Question>();

  private router: Router;
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(quiz: Quiz): void {
    this.router.navigate([quiz.name + '/question-list' ]);
  }

}
