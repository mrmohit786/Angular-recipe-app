import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingEditComponent } from './shopping-item/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingItemService } from './shopping-item/shopping-item.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingItemComponent,
    ShoppingEditComponent,
    DropDownDirective
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
