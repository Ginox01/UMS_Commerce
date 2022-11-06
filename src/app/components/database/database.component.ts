import { UserInterface } from './../../interfaces/user-interface';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
})
export class DatabaseComponent implements OnInit {
  users: UserInterface[] = [];
  faOpen = faPlayCircle;
  @Output('send-open-form') onOpenForm = new EventEmitter();
  @Output('send-delete-user') onDeleteUser = new EventEmitter();

  constructor(private serviceUsers: UsersService) {}

  ngOnInit(): void {
    this.users = this.serviceUsers.getUsers();
  }

  passOpenForm() {
    this.onOpenForm.emit();
  }

  sendDeleteUser(user: UserInterface) {
    this.onDeleteUser.emit(user);
  }
}
