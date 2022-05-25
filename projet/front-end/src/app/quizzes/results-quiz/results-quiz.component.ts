import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Theme} from '../../../models/theme.model';
import {ThemeService} from '../../../services/theme.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuizPlayed} from '../../../models/quiz.played.model';
import {QuizPlayedService} from '../../../services/quiz.played.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-results-quiz',
  templateUrl: './results-quiz.component.html',
  styleUrls: ['./results-quiz.component.scss']
})

export class ResultsQuizComponent implements OnInit {
  public quiz: Quiz;
  public theme: Theme;
  public score: number;
  public user: User;
  private save = false;

  constructor(private router: Router, public formBuilder: FormBuilder, private quizService: QuizService,
              private themeService: ThemeService, private quizPlayedService: QuizPlayedService, private userService: UserService) {
    userService.setSelectedUser(parseInt(localStorage.getItem('user'), 10));
    userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
    quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.themeService.setSelectedTheme(this.quiz.themeId);
    });
    themeService.themeSelected$.subscribe((theme) => {
      this.theme = theme;
      this.saveQuizPlayed();
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

  saveQuizPlayed(): void {
    if (!this.save) {
      const quizPlayedToCreate = {
        playerName: this.user.userName,
        playedQuizName: this.quiz.name,
        quizImg: this.quiz.img,
        playedThemeName: this.theme.name,
        score: this.score,
        questionLength: this.quiz.questions.length,
        id: Date.now(),
        playerId: this.user.id
      };
      console.log('quizPlayedToCreate :', quizPlayedToCreate);
      this.quizPlayedService.addQuizPlayed(quizPlayedToCreate);
      this.save = true;
    }
  }
}
