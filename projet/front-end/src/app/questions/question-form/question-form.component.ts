import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  quiz: Quiz;

  public questionForm: FormGroup;


  constructor(private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder, private quizService: QuizService) {
    // Form creation
    this.quizService.quizSelected$.subscribe( quiz => {
      this.quiz = quiz;
      console.log(quiz);
    });
    this.initializeQuestionForm();
  }

  ngOnInit(): void {
    this.initializeQuestionForm();
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(parseInt(id, 10));
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

      // this.initializeQuestionForm();
    }
  }

  finish(): void {
    let count = 0;
    for (const question of this.quiz.questions) {
      question.id = count;
      count++;
    }
    console.log('Quiz créé : ', this.quiz);
    this.quizService.updateQuiz(this.quiz);
    this.router.navigate(['/mes-quiz']);
  }
}
