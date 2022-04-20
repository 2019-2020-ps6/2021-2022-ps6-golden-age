import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Theme} from '../../../models/theme.model';
import {ThemeService} from '../../../services/theme.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuizPlayed} from '../../../models/quiz.played.model';
import {QuizPlayedService} from '../../../services/quiz.played.service';

@Component({
  selector: 'app-results-quiz',
  templateUrl: './results-quiz.component.html',
  styleUrls: ['./results-quiz.component.scss']
})

export class ResultsQuizComponent implements OnInit {
  public quiz: Quiz;
  public theme: Theme;
  public score: number;

  public save = false;
  public saveForm: FormGroup;
  public wrongForm = false;

  constructor(private router: Router, public formBuilder: FormBuilder, private quizService: QuizService,
              private themeService: ThemeService, private quizPlayedService: QuizPlayedService) {
  }

  ngOnInit(): void {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.themeService.setSelectedTheme(this.quiz.themeId);
    });
    this.themeService.themeSelected$.subscribe((theme) => {
      this.theme = theme;
    });
    this.score = history.state.data;
    this.saveForm = this.formBuilder.group({
      playerName: [''],
    });
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
    const quizPlayedToCreate: QuizPlayed = this.saveForm.getRawValue() as QuizPlayed;
    if (quizPlayedToCreate.playerName !== ''){
      quizPlayedToCreate.playerName = quizPlayedToCreate.playerName.toLowerCase();
      quizPlayedToCreate.quizId = this.quiz.id;
      quizPlayedToCreate.themeId = this.theme.id;
      quizPlayedToCreate.score = this.score;
      quizPlayedToCreate.id = Date.now();

      console.log('quizPlayedToCreate :', quizPlayedToCreate);
      this.quizPlayedService.addQuizPlayed(quizPlayedToCreate);
      this.save = true;
      this.wrongForm = false;
    }
    else {
      this.wrongForm = true;
    }
  }
}
