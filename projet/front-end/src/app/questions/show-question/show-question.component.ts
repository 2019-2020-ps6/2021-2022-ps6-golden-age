import {Component, OnInit, Input, ViewChild, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer, Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})

// tslint:disable-next-line:class-name
export class ShowQuestionComponent implements OnInit {
  @Input()
  public question: Question;
  public quiz: Quiz;
  public id: number;
  public answers: Answer[];
  public selectedAnswer: Answer;
  public answered: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService, private dialog: MatDialog) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.question = quiz.questions[this.id];
      this.answers = this.question.answers;
      this.answered = false;
    });
  }
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>): void {
    this.dialog.open(templateRef);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(parseInt(id, 10));
    this.id = parseInt(this.route.snapshot.paramMap.get('questionId'), 10) - 1;
  }

  selectAnswer(answer: Answer): void {
    this.selectedAnswer = answer;
    this.answered = true;
  }

  suivant(): void {
    if (this.id + 1 < this.quiz.questions.length){
      const currentUrl = 'quiz/' + this.quiz.id + '/questions/' + (this.id + 2);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
    else{
      this.router.navigate(['resultats']);
      this.quizService.setSelectedQuiz(this.quiz.id);
    }
  }

  openDialogWithoutRef(): void{
    this.dialog.open(this.secondDialog);
  }
}
