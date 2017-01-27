import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';

import { CategoryService } from '../../services/category.service';

import { CategoryUtility } from '../../utilities/category.utility';

@Component({
  selector: 'recipe-box-categories',
  templateUrl: './categories.component.html',
  styleUrls: [ './categories.component.css' ]
})
export class CategoriesComponent{

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
    this.categoryService.getAllCategoriesRecipesForUser(userId).subscribe((categories) => {
      this.categories = categories;
      var sortedAllCategoriesRecipes = this.categoryUtility.sortCategoryRecipes(categories);
      this.sortedCategories = sortedAllCategoriesRecipes['sortedCategories'];
      this.sortedRecipes = sortedAllCategoriesRecipes['sortedRecipes'];
    });
  }

  onSelectCategory(selectedCategoryName: string) {
    this.selectedCategoryName = selectedCategoryName;
    this.sortedRecipes = this.categoryUtility.getCategoryRecipes(selectedCategoryName, this.categories);
  }
}