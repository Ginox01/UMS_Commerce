import { UsersService } from './../../services/users.service';

import { Component, OnInit, Output, EventEmitter , Input } from '@angular/core';
import { User } from 'src/app/classes/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  @Output('send-close-form') onCloseForm = new EventEmitter();
  @Input('get-user')  user = new User();

  stepName = false;
  stepLastName = false;
  stepAge = false;
  stepMail = false;
  stepLocation = false;
  stepPrice = false;


  declare form: FormGroup;

  constructor(private fb: FormBuilder,private serviceUsers:UsersService) {}

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

  saveUser(){
    let name:any = document.getElementById('name');
    let lastName:any = document.getElementById('last-name');
    let age:any = document.getElementById('age');
    let mail:any = document.getElementById('mail');
    let location:any = document.getElementById('location');
    let price:any = document.getElementById('price');

    this.checkForm(name,lastName,age,mail,location,price)

    this.user.name = name.value;
    this.user.lastName = lastName.value;
    this.user.age = age.value;
    this.user.mail = mail.value;
    this.user.location = location.value;
    this.user.price = price.value

    if(
      this.stepName == true && this.stepLastName == true &&
      this.stepAge == true && this.stepMail == true &&
      this.stepLocation == true && this.stepPrice == true
    ){
      if(this.user.id > 0){
        this.serviceUsers.updateUser(this.user);
        this.closeTheForm()
      }else {
        this.serviceUsers.newUser(this.user);
        this.closeTheForm()
      }
    }
  }

  checkForm(name:any,lastName:any,age:any,mail:any,location:any,price:any){
    this.checkName(name);
    if(this.stepName == true){
      this.checkSurname(lastName);
    }
    if(this.stepLastName == true){
      this.checkAge(age)
    }


  }

  checkName(name:any){
    if(name.value.length > 4){
      this.stepName = true;
      name.className = 'form-control is-valid';
      this.resetErrorMessage()
    }else {
      name.className = 'form-control is-invalid';
      this.displayErrorMessage('Name field is too short!');
      this.stepName = false
    }
  }
  checkSurname(lastName:any){
    if(lastName.value.length > 4){
      this.stepLastName = true;
      lastName.className = 'form-control is-valid';
      this.resetErrorMessage()
    }else {
      lastName.className = 'form-control is-invalid';
      this.displayErrorMessage('Last Name field is too short!');
      this.stepLastName = false
    }
  }

  checkAge(age:any){
    //DA QUI! ++++++
  }

  displayErrorMessage(msg:string){
    let errorMessage = document.getElementById('error-message');
    errorMessage!.innerHTML = msg
  }

  resetErrorMessage(){
    let errorMessage = document.getElementById('error-message');
    errorMessage!.innerHTML = ""
  }

}
