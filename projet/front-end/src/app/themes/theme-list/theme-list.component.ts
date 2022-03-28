import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { Theme } from '../../../models/theme.model';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private router: Router, public themeService: ThemeService) {
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit(): void {
  }

  themeSelected(theme: Theme): void {
    console.log(theme);
    this.router.navigate(['/select-theme/' + theme.id]);
    console.log('event received from child:', theme);
  }

  // editQuiz(quiz: Theme): void {
  //   this.router.navigate(['/edit-quiz/' + quiz.name]);
  // }

  deleteTheme(theme: Theme): void {
    this.themeService.deleteTheme(theme);
  }
}
