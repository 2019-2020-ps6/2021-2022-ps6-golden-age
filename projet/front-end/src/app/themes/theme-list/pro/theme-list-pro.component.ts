import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../services/theme.service';
import { Theme } from '../../../../models/theme.model';

@Component({
  selector: 'app-theme-list-pro',
  templateUrl: './theme-list-pro.component.html',
  styleUrls: ['./theme-list-pro.component.scss']
})
export class ThemeListProComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private router: Router, public themeService: ThemeService) {
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit(): void {
  }

  deleteTheme(theme: Theme): void {
    this.themeService.deleteTheme(theme);
  }
}
