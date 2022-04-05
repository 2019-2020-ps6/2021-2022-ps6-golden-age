import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../../services/question.service';
import {Question} from '../../../models/question.model';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuestionComponent implements OnInit {
  @Input()
  public question: Question;
  constructor(private route: ActivatedRoute, private questionService: QuestionService) {
    this.questionService.questionSelected$.subscribe((question) => this.question = question);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.questionService.setSelectedQuestion(parseInt(id, 10));
  }
}
