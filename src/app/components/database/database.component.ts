import { UserInterface } from './../../interfaces/user-interface';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
})
export class DatabaseComponent implements OnInit {
  declare users:any[];
  faOpen = faPlayCircle;
  @Output('send-open-form') onOpenForm = new EventEmitter();
  @Output('send-delete-user') onDeleteUser = new EventEmitter();
  @Output('pass-update-user') onPassUpdateUser = new EventEmitter()

  constructor(private serviceUsers: UsersService) {}

  ngOnInit(): void {
    this.serviceUsers.getUsers()
    .subscribe((data:any)=> this.users = data);
  }

}
