import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../services/theme.service';
import {QuizPlayed} from '../../../models/quiz.played.model';
import {QuizPlayedService} from '../../../services/quiz.played.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quiz-played-list',
  templateUrl: './quiz-played-list.component.html',
  styleUrls: ['./quiz-played-list.component.scss']})

export class QuizPlayedListComponent implements OnInit {

  public quizPlayedList: QuizPlayed[] = [];

  public findForm: FormGroup;
  public find = false;
  public wrongForm = false;

  public pro: string;

  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, public quizPlayedService: QuizPlayedService) {
    this.quizPlayedService.retrieveQuizzesPlayed();
    this.quizPlayedService.quizzes$.subscribe((quizPlayed) => {
      this.quizPlayedList = quizPlayed;
      console.log('Liste de quizPlayed :', this.quizPlayedList);
    });
    this.findForm = this.formBuilder.group({
      playerName: [''],
    });
  }

  ngOnInit(): void {
    this.pro = this.route.snapshot.paramMap.get('pro');
  }

  findQuizPlayed(): void {
    let playerName: string = this.findForm.getRawValue().playerName as string;
    playerName = playerName.toLowerCase();
    if (playerName !== ''){
      console.log('player name : ', playerName, typeof playerName);
      this.quizPlayedService.retrieveQuizzesPlayed();
      this.quizPlayedService.quizzes$.subscribe((quizzesPlayedList) => {
        console.log('hzevfhljv', quizzesPlayedList);
        this.quizPlayedList = quizzesPlayedList.filter((quizPlayed) => quizPlayed.playerName === playerName);
        this.quizPlayedList.reverse();
        console.log('quizPlayedList', this.quizPlayedList);
      });
      this.find = true;
      this.wrongForm = false;
    }
    else {
      this.find = false;
      this.wrongForm = true;
    }
  }

  findAllQuizPlayed(): void {
    this.quizPlayedService.retrieveQuizzesPlayed();
    this.quizPlayedService.quizzes$.subscribe((quizzesPlayedList) => {
      this.quizPlayedList = quizzesPlayedList;
      this.quizPlayedList.reverse();
    });
    this.find = true;
  }
}
