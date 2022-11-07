import { User } from 'src/app/classes/user';
import { UsersService } from './services/users.service';
import { UserInterface } from './interfaces/user-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user manager system complex';
  formOpen = false;

  constructor(private serviceUsers: UsersService) {}

  user = new User();

  openForm() {
    this.formOpen = true;
  }
  closeForm() {
    this.formOpen = false;
  }

  userDelete(user: UserInterface) {
    this.serviceUsers.deleteUser(user);
  }

  updateUser(user:UserInterface){
    this.user = user;
    this.formOpen = true
  }
}
