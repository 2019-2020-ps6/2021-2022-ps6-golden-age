import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Theme } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)

  /**
   * QuizForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms#step-1-creating-a-formgroup-instance
   */
  public themeForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public themeService: ThemeService) {
    this.themeForm = this.formBuilder.group({
      name: [''],
      img: [''],
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit(): void {
  }

  addTheme(): void {
    // We retrieve here the theme object from the themeForm and we cast the type "as Theme".
    const themeToCreate: Theme = this.themeForm.getRawValue() as Theme;
    console.log(themeToCreate.img),
    themeToCreate.img = themeToCreate.img ? themeToCreate.img : 'assets/images/a.png';
    console.log(themeToCreate);
    this.themeService.addTheme(themeToCreate);
  }

}
