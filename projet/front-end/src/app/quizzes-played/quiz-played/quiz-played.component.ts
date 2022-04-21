import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { QuizPlayed } from '../../../models/quiz.played.model';
import { Quiz } from '../../../models/quiz.model';
import { Theme } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-played',
  templateUrl: './quiz-played.component.html',
  styleUrls: ['./quiz-played.component.scss']
})
export class QuizPlayedComponent implements OnInit {

  @Input()
  quizPlayed: QuizPlayed;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit(): void {
  }

}
