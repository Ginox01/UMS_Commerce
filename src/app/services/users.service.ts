import { UserInterface } from './../interfaces/user-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Luigi',
      lastName: 'Volpe',
      age: 30,
      mail: 'luigivolpe00@gmail.com',
      location: 'Triggiano',
      price: 975,
    },
    {
      id: 2,
      name: 'Valeria',
      lastName: 'Marzocolli',
      age: 26,
      mail: 'rosymarzy@mail.it',
      location: 'Capurso',
      price: 350,
    },
    {
      id: 3,
      name: 'Maria',
      lastName: 'Bianchi',
      age: 20,
      mail: 'maria@mail.it',
      location: 'Bari',
      price: 150,
    },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  deleteUser(user: UserInterface) {
    let index = this.users.indexOf(user);
    if (index != -1) {
      this.users.splice(index, 1);
    }
  }
}
