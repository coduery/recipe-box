import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

// Use temporary in-memory database
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
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
    RecipesComponent,
    IngredientsComponent,
    UnitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ CategoryService, RecipeService,
               CategoryUtility
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
