import {Component, OnInit, Input, ViewChild, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer, Question} from '../../../models/question.model';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {MatDialog} from '@angular/material/dialog';
import {ConfigurationService} from "../../../services/configuration.service";

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
  public currentScore: number;

  public classes = ['answerDefault', 'answerDefault', 'answerDefault', 'answerDefault'];

  constructor(private route: ActivatedRoute, private router: Router, private quizService: QuizService, private dialog: MatDialog, private configurationService: ConfigurationService) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      this.question = quiz.questions[this.id];
      this.answers = this.question.answers;
      this.answered = false;
    });
    this.currentScore = history.state.data;
    if (this.currentScore === undefined){
      this.currentScore = 0;
    }
    console.log(this.currentScore);
  }
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>): void {
    this.dialog.open(templateRef);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(parseInt(id, 10));
    this.id = parseInt(this.route.snapshot.paramMap.get('questionId'), 10) - 1;
    this.currentScore = history.state.data;
    if (this.currentScore === undefined){
      this.currentScore = 0;
    }
  }

  updateClass(answer: Answer): void {
    const index = this.answers.indexOf(answer);
    for (let i = 0; i < 4; i += 1){
      if (this.answers[i].isCorrect){
        this.classes[i] = 'answerRight';
      }
      else {
        if (i === index && !this.answers[i].isCorrect){
          this.classes[i] = 'answerWrong';
        }
        else {
          this.classes[i] = 'answerOther';
        }
      }
    }
  }

  selectAnswer(answer: Answer): void {
    if (!this.answered){
      this.selectedAnswer = answer;
      this.answered = true;
      if (this.selectedAnswer.isCorrect) {
        this.currentScore += 1;
      }
      this.updateClass(answer);
    }
  }

  suivant(): void {
    if (this.id + 1 < this.quiz.questions.length){
      const currentUrl = 'quiz/' + this.quiz.id + '/questions/' + (this.id + 2);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl], {state: {data: this.currentScore}});
        console.log('score:', this.currentScore);
      });
    }
    else{
      console.log('score:', this.currentScore);
      this.router.navigate(['resultats'], {state: {data: this.currentScore}});
      this.quizService.setSelectedQuiz(this.quiz.id);
    }
  }

  openDialogWithoutRef(): void{
    this.dialog.open(this.secondDialog);
  }
}
