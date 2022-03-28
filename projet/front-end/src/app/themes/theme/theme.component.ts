import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Theme } from '../../../models/theme.model';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input()
  theme: Theme;

  @Output()
  themeSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @Output()
  // editQuiz: EventEmitter<Theme> = new EventEmitter<Theme>();

  // @Output()
  // deleteQuiz: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTheme(): void {
    this.themeSelected.emit(true);
  }

  // edit(): void {
  //   this.editQuiz.emit(this.quiz);
  // }
  //
  // delete(): void {
  //   this.deleteQuiz.emit(this.quiz);
  // }
}
