import { Component, OnInit, Input } from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {QUIZ_LIST} from '../../../mocks/quiz-list.mock';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuestionComponent implements OnInit {
  @Input()
  quiz = QUIZ_LIST.pop();
  private router: Router;
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(quiz: Quiz): void {
    this.router.navigate([quiz.name + '/question-list' ]);
  }

}
