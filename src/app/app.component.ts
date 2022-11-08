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

  constructor() {}

}
