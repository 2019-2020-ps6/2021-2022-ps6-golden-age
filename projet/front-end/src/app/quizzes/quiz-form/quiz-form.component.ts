import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {ThemeService} from '../../../services/theme.service';
import {Theme} from '../../../models/theme.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public quizForm: FormGroup;
  public themeList: Theme[] = [];

  constructor(public formBuilder: FormBuilder, public quizService: QuizService, public themeService: ThemeService) {
    this.quizForm = this.formBuilder.group({
      name: [''],
      themeId: ['']
    });
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
    console.log(this.themeList);
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit(): void {
  }

  addQuiz(): void {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    quizToCreate.img = quizToCreate.img ? quizToCreate.img : 'assets/images/a.png';
    console.log(typeof (quizToCreate.themeId));
    quizToCreate.themeId = parseInt(String(quizToCreate.themeId), 10);
    console.log(quizToCreate);
    this.quizService.addQuiz(quizToCreate);
  }

}
