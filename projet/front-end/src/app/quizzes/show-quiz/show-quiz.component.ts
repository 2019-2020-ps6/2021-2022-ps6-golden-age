import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../../models/question.model';
import {QUIZ_LIST} from '../../../mocks/quiz-list.mock';
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuizComponent implements OnInit {
  public quiz: Quiz;

  // quiz = QUIZ_LIST.pop();
  private router: Router;
  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

  startQuiz(quiz: Quiz): void {
    this.router.navigate([quiz.name + '/question-list' ]);
  }

}
