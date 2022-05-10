import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public users: User[];

  public findForm: FormGroup;
  public find = false;
  public wrongForm = false;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public router: Router) {
    this.userService.retrieveUsers();
    this.userService.users$.subscribe((users) => {
      this.users = users;
      console.log('Liste dutilisateurs :', this.users);
    });
    this.findForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  findUser(pro: boolean): void{
    const user: User = this.findForm.getRawValue() as User;
    console.log('user:', user);
    if (user.userName !== ''){
      console.log('player user : ', user, typeof user);
      this.userService.retrieveUsers();
      this.userService.users$.subscribe((userList) => {
        this.users = userList.filter((u) => u.userName === user.userName && u.password === user.password); });
      if (this.users.length === 1) {
        if (this.users[0].pro && pro){
          localStorage.clear();
          localStorage.setItem('user', String(this.users[0].id));
          this.userService.setSelectedUser(this.users[0].id);
          this.router.navigate(['/mes-quiz']);
        }
        if (this.users[0].pro === false && pro === false){
          localStorage.clear();
          localStorage.setItem('user', String(this.users[0].id));
          this.userService.setSelectedUser(this.users[0].id);
          console.log(this.users[0]);
          this.router.navigate(['/accueilUser']);
        }
      }
      else{
        console.log('user not found');
      }
    }
    else {
      console.log('empty form');
      this.find = false;
      this.wrongForm = true;
    }
  }

  signinUser(): void {
    this.router.navigate(['/signin-user']);
  }

  signinPro(): void {
    this.router.navigate(['/signin-pro']);
  }
}
