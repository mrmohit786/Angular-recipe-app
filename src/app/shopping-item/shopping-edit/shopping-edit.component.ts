import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef
  @ViewChild('amountInput') amountInputRed : ElementRef

  constructor(private shoppingItemService : ShoppingItemService) { }

  onAddItem () {
    const ingredientName = this.nameInputRef.nativeElement.value
    const ingredientAmount = this.amountInputRed.nativeElement.value
    
    const newIngredient = new Ingredient(ingredientName , ingredientAmount)
    this.shoppingItemService.addIngredient(newIngredient)

  }


  ngOnInit(): void {
  }

}
