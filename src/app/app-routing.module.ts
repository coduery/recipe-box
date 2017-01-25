import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'units', component: UnitsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}