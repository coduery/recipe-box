import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryAddModalComponent } from './components/categories/category-add-modal.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { UnitsComponent } from './components/units/units.component';

import { CategoryService } from './services/category.service';
import { RecipeService } from './services/recipe.service';

import { CategoryUtility } from './utilities/category.utility';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryAddModalComponent,
    RecipesComponent,
    IngredientsComponent,
    UnitsComponent
  ],
  entryComponents: [
    CategoryAddModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ CategoryService, RecipeService,
               CategoryUtility
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
