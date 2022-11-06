import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  @Output('send-close-form') onCloseForm = new EventEmitter();

  user = new User();
  declare form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.user.name],
      lastName: [this.user.lastName],
      age: [this.user.age],
      mail: [this.user.mail],
      price: [this.user.price],
      location: [this.user.location],
    });
  }

  closeTheForm() {
    this.onCloseForm.emit();
  }
}
