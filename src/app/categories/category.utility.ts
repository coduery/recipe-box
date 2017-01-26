import { Injectable } from '@angular/core';

import { Category } from './category';

@Injectable()
export class CategoryUtility {
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

    getCategoryRecipes(selectedCategoryName: string, categories: Category[]): string[] {
    var sortedAllCategoriesRecipes;
    if (selectedCategoryName == 'All') {
      sortedAllCategoriesRecipes = this.sortCategoryRecipes(categories);
    } else {
      var selectedCategory = [];
      categories.forEach(function(category) {
        if (category.name == selectedCategoryName) {
          selectedCategory.push(category);
        }
      });
      sortedAllCategoriesRecipes = this.sortCategoryRecipes(selectedCategory);
    }
    return sortedAllCategoriesRecipes['sortedRecipes'];
  }
}