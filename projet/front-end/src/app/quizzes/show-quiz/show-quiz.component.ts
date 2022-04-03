import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {QUESTION_MONUMENT} from '../../../mocks/quiz-list.mock';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuizComponent implements OnInit {
  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();
  public quiz: Quiz;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(parseInt(id, 10));
  }

  startQuiz(): void {
    console.log(this.quiz);
    this.router.navigate(['/question/' + QUESTION_MONUMENT.id ]);
  }

}
