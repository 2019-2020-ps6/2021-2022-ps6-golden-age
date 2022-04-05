import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  quiz: Quiz;

  public questionForm: FormGroup;


  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private quizService: QuizService) {
    // Form creation
    this.quizService.quizSelected$.subscribe( quiz => {
      this.quiz = quiz;
      console.log(quiz);
    });
    this.initializeQuestionForm();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 4 ; i++) {
      this.addAnswer();
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(parseInt(id, 10));
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['', Validators.required],
      answers: this.formBuilder.array([])
    });
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
      question.id = Date.now();
      console.log('questionToCreate', question);
      this.quizService.addQuestion(this.quiz, question);
      this.initializeQuestionForm();
    }
  }
}
