import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer, Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuestionComponent implements OnInit {
  @Input()
  public question: Question;
  public id: number;
  public answers: Answer[];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.question = quiz.questions[this.id];
      this.answers = this.question.answers; });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(parseInt(id, 10));
    this.id = parseInt(this.route.snapshot.paramMap.get('questionId'), 10) - 1;
  }
}
