import { UserInterface } from './../interfaces/user-interface';

export class User implements UserInterface {
  id: number;
  name: string;
  lastName: string;
  age: number;
  mail: string;
  location: string;
  price: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastName = '';
    this.age = 18;
    this.mail = '';
    this.location = '';
    this.price = 100;
  }
}
