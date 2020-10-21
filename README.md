# Recipe Application
Recipe application built while learning Angular from udemy course.
[Angular - The Complete Guide (2020 Edition)](Angular%20-%20The%20Complete%20Guide%20%282020%20Edition%29)


>Routes
```
const  appRoutes : Routes  = [
{path:"",redirectTo : "/recipes",pathMatch :"full"},
{path: "recipes", component : RecipesComponent ,children  : [
	{path: '', component : RecipeStartComponent},
	{path: 'new', component : RecipeEditComponent},
	{path: ':id', component : RecipeDetailComponent},
	{path: ':id/edit', component : RecipeEditComponent}
	]},
{path: "shoppinglist", component : ShoppingItemComponent}]
```
### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
