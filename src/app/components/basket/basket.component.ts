import { Router } from '@angular/router';
import { BasketService } from './../../services/basket.service';
import { UserInterface } from './../../interfaces/user-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  total = 0;
  items:UserInterface[] = [];

  constructor(private serviceBasket:BasketService , private route:Router) { }

  ngOnInit(): void {
    this.items = this.serviceBasket.getItems();
    this.total = this.serviceBasket.getTotal();
  }

  thankYou(){
    alert('Thank you for your purchase!');
    alert('The total is ' + this.total + ',00€');
    this.serviceBasket.clearBasket();
    this.total = 0;
    this.route.navigateByUrl('/')
  }

}
