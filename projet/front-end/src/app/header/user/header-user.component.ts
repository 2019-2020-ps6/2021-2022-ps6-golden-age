import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfigurationService} from '../../../services/configuration.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  constructor(private dialog: MatDialog, private configurationService: ConfigurationService){
  }
  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>): void {
    this.dialog.open(templateRef);
  }

  openDialogWithoutRef(): void{
    this.dialog.open(this.secondDialog);
  }

  ngOnInit(): void {
  }

  toggle(size) {
    this.configurationService.setCss('body', 'font-size', size);
  }
}
