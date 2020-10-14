import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  
  ingredients : Ingredient[] = [
    new Ingredient("Apples" , 5),
    new Ingredient("Tomatos" , 8),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
