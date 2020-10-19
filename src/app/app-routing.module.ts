import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

const appRoutes : Routes = [
    {path : "" , redirectTo : "/recipes" , pathMatch :"full"},
    {path : "recipes" , component : RecipesComponent , children : [
        {path : '' , component : RecipeStartComponent},
        {path : 'new' , component : RecipeEditComponent},
        {path : ':id' , component : RecipeDetailComponent},
        {path : ':id/edit' , component : RecipeEditComponent}



    ]},
    {path : "shoppinglist" , component : ShoppingItemComponent}
  ]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],

    exports : [RouterModule]
})
export class AppRoutingModule {
    
}