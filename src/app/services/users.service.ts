import { UserInterface } from './../interfaces/user-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  apiUsers = 'http://localhost:3000/users'

  constructor(private http:HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUsers)
  }

  getUser(id:string){
    return this.http.get(this.apiUsers + '/' + id)
  }

  deleteUser(user: UserInterface) {
    return this.http.delete(this.apiUsers + '/' + user.id)
  }

  updateUser(user:UserInterface){
    return this.http.put(this.apiUsers + '/' + user.id , user)
  }

  newUser(user:UserInterface){
    return this.http.post(this.apiUsers , user)
  }
}
