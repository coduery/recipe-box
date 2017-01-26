import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../models/category';

import { CategoryService } from '../../services/category.service';

import { CategoryUtility } from '../../utilities/category.utility';

@Component({
  selector: 'recipe-box-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})
export class HomeComponent{
  categories: Category[];
  selectedCategoryName: string;
  sortedCategories: string[];
  sortedRecipes: string[];

  constructor(private categoryService: CategoryService,
              private categoryUtility: CategoryUtility) {}

  ngOnInit(): void {
    this.getAllCategoriesRecipesForUser();
  }

  getAllCategoriesRecipesForUser(): void {
    let userId = 1;  // TODO: to be based upon logged in user
    var allCategories = this.categoryService.getAllCategoriesRecipesForUser(userId);
    allCategories.subscribe((categories) => {
      this.categories = categories;
      var sortedAllCategoriesRecipes = this.categoryUtility.sortCategoryRecipes(categories);
      this.sortedCategories = sortedAllCategoriesRecipes['sortedCategories'];
      this.sortedRecipes = sortedAllCategoriesRecipes['sortedRecipes'];
    });
  }

  onSelect(selectedCategoryName: string): void {
    this.selectedCategoryName = selectedCategoryName;
    this.sortedRecipes = this.categoryUtility.getCategoryRecipes(selectedCategoryName, this.categories);
  }
}
