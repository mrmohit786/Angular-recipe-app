import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingItemService} from './shopping-item.service'
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit , OnDestroy {
  
  ingredients : Ingredient[] 
  private igChangeSub :Subscription;
  constructor(private shoppingItemService : ShoppingItemService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingItemService.getIngredients()
   this.igChangeSub = this.shoppingItemService.ingredientChange.subscribe((ingredients : Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe()
  }

}
