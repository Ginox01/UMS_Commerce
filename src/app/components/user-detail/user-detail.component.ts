import { UserInterface } from './../../interfaces/user-interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faTrash,
  faPen,
  faMoneyBill1,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tr[app-user-detail]',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input('get-user') declare user: UserInterface;
  @Output('send-delete-user') onDeleteUser = new EventEmitter();
  @Output('pass-update-user') onPassUpdateUser = new EventEmitter();

  faTrash = faTrash;
  faPen = faPen;
  faMoney = faMoneyBill1;

  constructor() {}

  ngOnInit(): void {}

  passDeleteUser() {
    this.onDeleteUser.emit(this.user);
  }

  passUpdateUser(){
    this.onPassUpdateUser.emit(this.user)
  }
}
