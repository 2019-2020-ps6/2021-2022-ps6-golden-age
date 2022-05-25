import {Component, OnInit} from '@angular/core';
import {QuizPlayed} from '../../../models/quiz.played.model';
import {QuizPlayedService} from '../../../services/quiz.played.service';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-quiz-played-list',
  templateUrl: './quiz-played-list.component.html',
  styleUrls: ['./quiz-played-list.component.scss']})

export class QuizPlayedListComponent implements OnInit {

  public user: User;
  public quizPlayedList: QuizPlayed[] = [];

  public find = false;

  constructor(public quizPlayedService: QuizPlayedService, private userService: UserService) {
    this.quizPlayedList = [];
  }

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
      this.quizPlayedService.getQuizzesPlayedById(user.id);
    });
    this.quizPlayedService.quizzesPlayed$.subscribe((quizPlayed) => {
      if (this.user ){
        if (this.quizPlayedList.length !== quizPlayed.length) {
          this.quizPlayedList = quizPlayed;
          this.quizPlayedList.reverse();
        }
      }
    });
  }
}
