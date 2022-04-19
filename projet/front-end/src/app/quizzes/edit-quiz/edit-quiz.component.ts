import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../../models/question.model";

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

  constructor(private route: ActivatedRoute, private quizService: QuizService, public formBuilder: FormBuilder) {
    this.quizService.quizSelected$.subscribe( quiz => {
      this.quiz = quiz;
      console.log('edit-quiz : ', quiz);
      this.newQuestion = quiz.questions.length === 0;
    });
  }

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    this.questionId = parseInt(this.route.snapshot.paramMap.get('questionId'), 10);
    this.quizService.setSelectedQuiz(parseInt(quizId, 10));
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

}
