import { Component, OnInit, Type, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { CategoryAddModalComponent } from './category-add-modal.component';

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
  sortedCategories: string[];
  sortedRecipes: string[];
  selectedCategoryName: string;
  selectedRecipeName: string;

  dialogRef: MdDialogRef<any>;

  constructor(private categoryService: CategoryService,
              private categoryUtility: CategoryUtility,
              private mdDialog: MdDialog,
              private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.getAllCategoriesRecipesForUser();
  }

  getAllCategoriesRecipesForUser(): void {
    let userId = 1;  // TODO: to be based upon logged in user
    this.categoryService.getAllCategoriesRecipesForUser(userId).subscribe((categories) => {
      this.categories = categories;
      let sortedAllCategoriesRecipes = this.categoryUtility.sortCategoryRecipes(categories);
      this.sortedCategories = sortedAllCategoriesRecipes['sortedCategories'];
      this.sortedRecipes = sortedAllCategoriesRecipes['sortedRecipes'];
    });
  }

  onSelectCategory(selectedCategoryName: string) {
    this.selectedCategoryName = selectedCategoryName;
    this.selectedRecipeName = undefined;
    this.sortedRecipes = this.categoryUtility.getCategoryRecipes(selectedCategoryName, this.categories);
  }

  onSelectRecipe(selectedRecipeName: string) {
    this.selectedRecipeName = selectedRecipeName;
  }

  addCategory() {
    this.setupModal(CategoryAddModalComponent);
  }

  editCategory() {
    console.log('editCategory called');
  }

  setupModal(modalComponent: Type<any>) {
    let config = new MdDialogConfig();
    config.disableClose = true;
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.mdDialog.open(modalComponent, config);
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      this.getAllCategoriesRecipesForUser();
    });
  }
}
