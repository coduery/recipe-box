import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}