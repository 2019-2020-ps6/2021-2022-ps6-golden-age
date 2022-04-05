import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {QUESTION_MONUMENT} from '../../../mocks/quiz-list.mock';
import {Theme} from '../../../models/theme.model';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuizComponent implements OnInit {
  public quiz: Quiz;
  public theme: Theme;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService, private themeService: ThemeService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.themeService.setSelectedTheme(this.quiz.themeId);
    });
    this.themeService.themeSelected$.subscribe((theme) => {
      this.theme = theme;
    });
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
