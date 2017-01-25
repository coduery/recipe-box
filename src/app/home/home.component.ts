import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from '../categories/category';
import { CategoryService } from '../categories/category.service';
import { Recipe } from '../recipes/recipe';

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

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategoriesRecipesForUser();
  }

  getAllCategoriesRecipesForUser(): void {
    let userId = 1;  // TODO: to be based upon logged in user
    var allCategories = this.categoryService.getAllCategoriesRecipesForUser(userId);
    allCategories.subscribe((categories) => {
      this.categories = categories;
      var sortedAllCategoriesRecipes = this.sortCategoryRecipes(categories);
      this.sortedCategories = sortedAllCategoriesRecipes['sortedCategories'];
      this.sortedRecipes = sortedAllCategoriesRecipes['sortedRecipes'];
    });
  }

  sortCategoryRecipes(categories: Category[]): Object {
    var categoryNames = [];
    var recipeNames = [];
    categories.forEach(function(category) {
      categoryNames.push(category.name);
      if (category.recipes) {
        category.recipes.forEach(function(recipe) {
          recipeNames.push(recipe.name);
        });
      }
    });
    var sortedCategories = this.mergeSort(categoryNames);
    var sortedRecipes = this.mergeSort(recipeNames);
    return { sortedCategories, sortedRecipes };
  }

  // Merge functions courtesy of Nicholas C. Zakas post at
  // https://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
  mergeSort(items){
    if (items.length < 2) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;
    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  onSelect(selectedCategoryName: string): void {
    this.selectedCategoryName = selectedCategoryName;
    this.getCategoryRecipes(selectedCategoryName);
  }

  getCategoryRecipes(selectedCategoryName: string): void {
    var sortedAllCategoriesRecipes;
    if (selectedCategoryName == 'All') {
      sortedAllCategoriesRecipes = this.sortCategoryRecipes(this.categories);
    } else {
      var selectedCategory = [];
      this.categories.forEach(function(category) {
        if (category.name == selectedCategoryName) {
          selectedCategory.push(category);
        }
      });
      sortedAllCategoriesRecipes = this.sortCategoryRecipes(selectedCategory);
    }
    this.sortedRecipes = sortedAllCategoriesRecipes['sortedRecipes'];
  }
}
