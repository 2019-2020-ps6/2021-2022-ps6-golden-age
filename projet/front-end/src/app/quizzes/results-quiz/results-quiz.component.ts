import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Theme} from '../../../models/theme.model';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-results-quiz',
  templateUrl: './results-quiz.component.html',
  styleUrls: ['./results-quiz.component.scss']
})

export class ResultsQuizComponent implements OnInit {
  public quiz: Quiz;
  public theme: Theme;
  public score: number;

  constructor(private router: Router, private quizService: QuizService, private themeService: ThemeService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      console.log(quiz);
      this.quiz = quiz;
      this.themeService.setSelectedTheme(this.quiz.themeId);
    });
    this.themeService.themeSelected$.subscribe((theme) => {
      this.theme = theme;
    });
    this.score = history.state.data;
  }

  ngOnInit(): void {
  }

  restartQuiz(): void {
    console.log('retry');
    this.router.navigate(['quiz/' + this.quiz.id + '/questions/1' ]);
  }

  showQuiz(): void {
    console.log('bye');
    this.router.navigate(['theme-list']);
  }

}
