import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Answer, Question} from '../../../models/question.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quiz: Quiz;
  public newQuestion: boolean;
  public questionId: number;

  public questionForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizService, public formBuilder: FormBuilder) {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    this.questionId = parseInt(this.route.snapshot.paramMap.get('questionId'), 10);
    this.quizService.setSelectedQuiz(parseInt(quizId, 10));

    this.quizService.quizSelected$.subscribe( quiz => {
      this.quiz = quiz;
      this.newQuestion = quiz.questions.length === 0 || quiz.questions.length === this.questionId;
      if (this.newQuestion) {
        this.initializeQuestionForm();
      } else {
        this.initializeEditQuestionForm();
      }
    });
  }

  ngOnInit(): void {
  }

  updateQuizId(): void {
    let count = 0;
    for (const question of this.quiz.questions) {
      question.id = count;
      count++;
    }
    console.log('Quiz créé : ', this.quiz);
    this.quizService.updateQuiz(this.quiz);
  }

  private initializeQuestionForm(): void {
    console.log('initialize question');
    console.log('quiz to edit ', this.quiz);
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([]),
      img: [''],
    });
    for (let i = 1; i <= 4 ; i++) {
      this.addAnswer();
    }
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addAnswer(): void {
    this.answers.push(this.createAnswer());
  }

  addQuestion(): void {
    if (this.questionForm.valid) {
      const question = this.questionForm.getRawValue() as Question;
      question.img = question.img ? question.img : 'assets/images/a.png';
      console.log('questionToCreate', question);
      this.quizService.addQuestion(this.quiz, question);
      this.initializeQuestionForm();
    }
  }

  private initializeEditQuestionForm(): void {
    console.log('initialize edited question');
    console.log('quiz to edit ', this.quiz);
    const question = this.quiz.questions[this.questionId];
    this.questionForm = this.formBuilder.group({
      label: [question.label, Validators.required],
      answers: this.formBuilder.array([]),
      img: [question.img],
    });
    for (let i = 0; i < 4 ; i++) {
      this.addEditAnswer(question.answers[i]);
    }
  }

  private addEditAnswer(answer: Answer): void {
    this.answers.push(this.editAnswer(answer));
  }

  private editAnswer(answer: Answer): FormGroup {
    return this.formBuilder.group({
      value: answer.value,
      isCorrect: answer.isCorrect,
    });
  }

  finish(): void {
    if (this.questionForm.valid){
      this.validateForm();
    }
    this.updateQuizId();
    this.router.navigate(['/mes-quiz']);
  }

  validateForm(): void{
    const question = this.questionForm.getRawValue() as Question;
    question.img = question.img ? question.img : 'assets/images/a.png';
    console.log('questionToCreate', question);
    this.quizService.editQuestion(this.quiz, question, this.questionId);
  }

  previousQuestion(): void {
    if (this.questionForm.valid) {
      this.validateForm();
    }
    const currentUrl = '/edit-quiz/' + this.quiz.id + '/question/' + (this.questionId - 1);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  nextQuestion(): void {
    if (this.questionForm.valid) {
      this.validateForm();
      const currentUrl = '/edit-quiz/' + this.quiz.id + '/question/' + (this.questionId + 1);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
  }

  deleteQuestion(): void {
    console.log('delete question edit', this.quiz);
    this.quizService.deleteQuestion(this.quiz, this.questionId);
    const currentUrl = '/edit-quiz/' + this.quiz.id + '/question/' + this.questionId;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
