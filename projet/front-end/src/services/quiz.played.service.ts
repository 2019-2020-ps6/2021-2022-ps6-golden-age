import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { QuizPlayed } from '../models/quiz.played.model';

@Injectable({
  providedIn: 'root'
})
export class QuizPlayedService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private quizzesPlayed: QuizPlayed[] = [];

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzesPlayed$: BehaviorSubject<QuizPlayed[]>
    = new BehaviorSubject(this.quizzesPlayed);

  private quizPlayedUrl = serverUrl + '/quizplayed';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveQuizzesPlayed();
  }

  retrieveQuizzesPlayed(): void {
    this.http.get<QuizPlayed[]>(this.quizPlayedUrl).subscribe((quizPlayedList) => {
      this.quizzesPlayed = quizPlayedList;
      this.quizzesPlayed$.next(this.quizzesPlayed);
    });
  }

  getQuizzesPlayedById(playerId: number): void {
    const urlWithId = this.quizPlayedUrl + '/' + playerId;
    this.http.get<QuizPlayed[]>(urlWithId).subscribe((quizPlayedList) => {
      this.quizzesPlayed = quizPlayedList;
      this.quizzesPlayed$.next(this.quizzesPlayed);
    });
  }

  addQuizPlayed(quizPlayed: QuizPlayed): void {
    this.http.post<QuizPlayed>(this.quizPlayedUrl, quizPlayed, this.httpOptions).subscribe(() => this.retrieveQuizzesPlayed());
  }
}
