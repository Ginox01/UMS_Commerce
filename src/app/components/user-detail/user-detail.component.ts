import { UsersService } from './../../services/users.service';
import { UserInterface } from './../../interfaces/user-interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faTrash,
  faPen,
  faMoneyBill1,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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

  constructor(private service:UsersService, private route:Router) {}

  ngOnInit(): void {}

  deleteUserClick() {
    let elemet:any = document.getElementById(String(this.user.id));
    this.service.deleteUser(this.user).subscribe(()=>{
      elemet.parentNode.removeChild(elemet)
    })

  }

  goToForm(){
    this.route.navigateByUrl('home/' + String(this.user.id) + '/edit')
  }

}
