import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingItemService} from './shopping-item.service'
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  
  ingredients : Ingredient[] 

  constructor(private shoppingItemService : ShoppingItemService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingItemService.getIngredients()
    this.shoppingItemService.ingredientChange.subscribe((ingredients : Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

}
