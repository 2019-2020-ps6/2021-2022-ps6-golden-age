import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']})

export class QuizListComponent implements OnInit {

  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  public theme: Theme;

  public quizList: Quiz[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public quizService: QuizService, public themeService: ThemeService) {
    this.quizService.retrieveQuizzes();
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
      this.quizList = this.quizList.filter(quiz => quiz.themeId.toString() === this.route.snapshot.paramMap.get('id'));
      console.log('Liste de quiz :', this.quizList);
    });
    this.themeService.themeSelected$.subscribe((theme) => {
      this.theme = theme;
    });
  }

  ngOnInit(): void {
    this.themeService.setSelectedTheme(parseInt(this.route.snapshot.paramMap.get('id'), 10));
  }

  selectQuiz(quiz: Quiz): void {
    this.router.navigate(['/quiz/' + quiz.id ]);
    this.quizService.setSelectedQuiz(quiz.id);
  }
}
