import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingItemService{

    ingredientChange = new Subject<Ingredient[]>()

   private ingredients : Ingredient[] = [
        new Ingredient("Apples" , 5),
        new Ingredient("Tomatos" , 8),
      ]

      getIngredients() {
          return this.ingredients.slice()
      }
 
      addIngredient(ingredient : Ingredient){
          this.ingredients.push(ingredient)
          this.ingredientChange.next(this.ingredients.slice())
      }

      addIngredients(ingredients : Ingredient[]){
       this.ingredients.push(...ingredients)
       this.ingredientChange.next(this.ingredients.slice())
    }
}