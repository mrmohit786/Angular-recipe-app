import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingItemService } from '../shopping-item/shopping-item.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

  constructor(private shoppingItemService : ShoppingItemService) {
    
  }

   private recipes : Recipe[] = [
        new Recipe("Tasty Schnitzel" , "A super-tasty Schnitzel", "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
        [ new Ingredient("Meat",1),    new Ingredient("French Fries",20)
        ]),
        new Recipe("Big Fat Burger" , "What else you need to say?" , "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" , 
        [ new Ingredient("Buns",2),    new Ingredient("Meat",1)
        ]),
      ]

      recipeSelected = new EventEmitter<Recipe>();

      getRecipes(){
          return this.recipes
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
          this.shoppingItemService.addIngredients(ingredients)
      }
}