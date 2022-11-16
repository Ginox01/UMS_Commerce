import { UserInterface } from './../interfaces/user-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  items:UserInterface[] = [];

  getItems(){
    return this.items
  }

  addItems(item:UserInterface){
    this.items.push(item)
  }

  clearBasket(){
    this.items = [];
    return this.items
  }

  getTotal(){
    return this.items.map(item => item.price).reduce((prev,curr)=>Number(prev) + Number(curr) , 0)
  }

}
