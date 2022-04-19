import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST} from '../mocks/quiz-list.mock';
import {Answer, Question} from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /*
   Services Documentation:
   https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /*
   The list of quiz.
   The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = QUIZ_LIST;

  /*
   Observable which contains the list of the quiz.
   Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]>
    = new BehaviorSubject(this.quizzes);

  public quizSelected$: Subject<Quiz> = new Subject();

  public answerSelected$: Subject<Answer> = new Subject();

  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveQuizzes();
  }

  retrieveQuizzes(): void {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz): void {
    this.http.post<Quiz>(this.quizUrl, quiz, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  setSelectedQuiz(quizId: number): void {
    const urlWithId = this.quizUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizSelected$.next(quiz);
      console.log('quiz: ', quiz);
    });
  }

  setSelectedAnswer(): void {
    const urlWithId = this.quizUrl;
    this.http.get<Answer>(urlWithId).subscribe((answer) => {
      this.answerSelected$.next(answer);
      console.log('answer: ', answer);
    });
  }

  deleteQuiz(quiz: Quiz): void {
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  addQuestion(quiz: Quiz, question: Question): void {
    quiz.questions.push(question);
    console.log('put', quiz);
    this.updateQuiz(quiz);
  }

  updateQuiz(quiz: Quiz): void{
    const urlWithId = this.quizUrl + '/' + quiz.id;
    this.http.put<Quiz>(urlWithId, quiz, this.httpOptions).subscribe(() => this.retrieveQuizzes());
  }

  deleteQuestion(quiz: Quiz, questionId: number): void {
    console.log('delete question before', quiz);
    quiz.questions.splice(questionId, 1);
    console.log('delet question after', quiz);
    this.updateQuiz(quiz);
  }

  editQuestion(quiz: Quiz, question: Question, questionId: number): void {
    quiz.questions[questionId] = question;
    console.log('edit', quiz);
    this.updateQuiz(quiz);
  }
}
