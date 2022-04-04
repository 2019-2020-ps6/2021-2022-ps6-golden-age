import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Theme } from '../../../../models/theme.model';

@Component({
  selector: 'app-theme-pro',
  templateUrl: './theme-pro.component.html',
  styleUrls: ['./theme-pro.component.scss']
})
export class ThemeProComponent implements OnInit {

  @Input()
  theme: Theme;

  // @Output()
  // editQuiz: EventEmitter<Theme> = new EventEmitter<Theme>();

  @Output()
  deleteTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // edit(): void {
  //   this.editQuiz.emit(this.quiz);
  // }
  //
  delete(): void {
    this.deleteTheme.emit(this.theme);
  }
}
