import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../services/theme.service';
import { Theme } from '../../../../models/theme.model';
import {QuizService} from '../../../../services/quiz.service';

@Component({
  selector: 'app-theme-list-user',
  templateUrl: './theme-list-user.component.html',
  styleUrls: ['./theme-list-user.component.scss']
})
export class ThemeListUserComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private router: Router, public themeService: ThemeService, public quizService: QuizService) {
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit(): void {
  }

  themeSelected(theme: Theme): void {
    this.router.navigate(['/theme/' + theme.id]);
    console.log('event received from child:', theme);
    this.themeService.setSelectedTheme(Number(theme.id));
  }
}
