import { UsersService } from './../../services/users.service';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/classes/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  @Output('send-close-form') onCloseForm = new EventEmitter();
  declare user:any

  stepName = false;
  stepLastName = false;
  stepAge = false;
  stepMail = false;
  stepLocation = false;
  stepPrice = false;

  declare form: FormGroup;

  constructor(private fb: FormBuilder, private serviceUsers: UsersService , private router:ActivatedRoute , private route:Router) {
    this.user = new User()
  }

  ngOnInit(): void {

    this.user = new User()

    this.router.params.subscribe((ele)=>{
      const id = ele['id'];
      if(id){
        this.serviceUsers.getUser(id).subscribe((data)=>{
        this.user = data
        })
      }
    })


    this.form = this.fb.group({
      name: [''],
      lastName: [''],
      age: [''],
      mail: [''],
      price: [''],
      location: [''],
    });

  }

  closeTheForm() {
    this.route.navigateByUrl('home')
  }
  saveUser() {
    let name: any = document.getElementById('name');
    let lastName: any = document.getElementById('last-name');
    let age: any = document.getElementById('age');
    let mail: any = document.getElementById('mail');
    let location: any = document.getElementById('location');
    let price: any = document.getElementById('price');

    this.checkForm(name, lastName, age, mail, location, price);

    if (
      this.stepName == true &&
      this.stepLastName == true &&
      this.stepAge == true &&
      this.stepMail == true &&
      this.stepLocation == true &&
      this.stepPrice == true
    ) {
      this.user.name = name.value;
      this.user.lastName = lastName.value;
      this.user.age = age.value;
      this.user.mail = mail.value;
      this.user.location = location.value;
      this.user.price = price.value;

      if (this.user.id > 0) {
        this.serviceUsers.updateUser(this.user).subscribe(()=> {
          this.route.navigateByUrl('home/database')
        })
        this.closeTheForm();
      } else {
        this.serviceUsers.newUser(this.user).subscribe(()=>{
          this.route.navigateByUrl('home/database')
        })
        this.closeTheForm();
      }
      this.stepName = false;
      this.stepLastName = false;
      this.stepAge = false;
      this.stepMail = false;
      this.stepLocation = false;
      this.stepPrice = false;
    }
  }

  checkForm(
    name: any,
    lastName: any,
    age: any,
    mail: any,
    location: any,
    price: any
  ) {
    this.checkName(name);
    if (this.stepName == true) {
      this.checkSurname(lastName);
    }
    if (this.stepLastName == true) {
      this.checkAge(age);
    }
    if (this.stepAge == true) {
      this.checkMail(mail);
    }
    if (this.stepMail == true) {
      this.checkPrice(price);
    }
    if (this.stepPrice == true) {
      this.checkLocation(location);
    }
  }

  checkName(name: any) {
    if (name.value.length > 4) {
      this.stepName = true;
      name.className = 'form-control is-valid';
      this.resetErrorMessage();
    } else {
      name.className = 'form-control is-invalid';
      this.displayErrorMessage('Name field is too short!');
      this.stepName = false;
    }
  }
  checkSurname(lastName: any) {
    if (lastName.value.length > 4) {
      this.stepLastName = true;
      lastName.className = 'form-control is-valid';
      this.resetErrorMessage();
    } else {
      lastName.className = 'form-control is-invalid';
      this.displayErrorMessage('Last Name field is too short!');
      this.stepLastName = false;
    }
  }

  checkAge(age: any) {
    if (age.value > 18 && age.value < 99) {
      this.stepAge = true;
      age.className = 'form-control is-valid';
      this.resetErrorMessage();
    } else if (age.value < 18) {
      age.className = 'form-control is-invalid';
      this.displayErrorMessage('The user have to be the legal age');
      this.stepAge = false;
    } else if (age.value > 99) {
      age.className = 'form-control is-invalid';
      this.displayErrorMessage('The user cannot be more than 99 years old');
      this.stepAge = false;
    }
  }

  checkMail(mail: any) {
    let carat = /@/;
    if (mail.value.length < 6) {
      this.stepMail = false;
      mail.className = 'form-control is-invalid';
      this.displayErrorMessage('Mail field too short!');
    } else if (!carat.test(mail.value)) {
      this.stepMail = false;
      mail.className = 'form-control is-invalid';
      this.displayErrorMessage('Mail field miss the @ element');
    } else {
      this.stepMail = true;
      mail.className = 'form-control is-valid';
      this.resetErrorMessage();
    }
  }

  checkPrice(price: any) {
    if (price.value < 100) {
      this.stepPrice = false;
      price.className = 'form-control is-invalid';
      this.displayErrorMessage('The minimun value is 100');
    } else {
      this.stepPrice = true;
      this.resetErrorMessage();
      price.className = 'form-control is-valid';
    }
  }

  checkLocation(location: any) {
    if (location.value.length < 4) {
      this.stepLocation = false;
      location.className = 'form-control is-invalid';
      this.displayErrorMessage('The location field is too short!');
    } else {
      this.stepLocation = true;
      location.className = 'form-control is-valid';
      this.resetErrorMessage();
    }
  }

  displayErrorMessage(msg: string) {
    let errorMessage = document.getElementById('error-message');
    errorMessage!.innerHTML = msg;
  }

  resetErrorMessage() {
    let errorMessage = document.getElementById('error-message');
    errorMessage!.innerHTML = '';
  }
}
