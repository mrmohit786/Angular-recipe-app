import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy {
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;

  @ViewChild('form',{static : true}) slForm : NgForm;

  constructor(private shoppingItemService : ShoppingItemService) { }

  onSubmit (form : NgForm) {

    const value = form.value
    const newIngredient = new Ingredient(value.name , value.amount)
   
    if (this.editMode) {
        this.shoppingItemService.updateIngredient(this.editedItemIndex , newIngredient)
    }else {
      this.shoppingItemService.addIngredient(newIngredient);
    }
  this.editMode = false ;
    form.reset()
  }

  onClear(){
  this.slForm.reset();
  this.editMode = false ;
}
  onDelete(){
    this.shoppingItemService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }

  ngOnInit() {
    this.subscription = this.shoppingItemService.startedEditing.subscribe((index : number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingItemService.getIngredient(index);
      this.slForm.setValue({
        name : this.editedItem.name,
        amount : this.editedItem.amount
      })
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
