import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.scss']
})
export class SigninUserComponent implements OnInit {

  public users: User[];

  public userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router) {
    this.userService.retrieveUsers();
    this.userService.users$.subscribe((users) => {
      this.users = users;
      console.log('Liste dutilisateurs :', this.users);
    });
    this.userForm = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      userName: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  addUser(): void{
    const userToCreate: User = this.userForm.getRawValue() as User;
    userToCreate.pro = false;
    userToCreate.id = Date.now();

    console.log('userToCreate:', userToCreate);
    this.userService.addUser(userToCreate);
    this.router.navigate(['/login']);
  }
}
