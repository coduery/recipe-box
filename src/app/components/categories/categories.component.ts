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
    this.selectedCategoryName = 'All';
    this.getCategoriesRecipes();
  }

  getCategoriesRecipes(): void {
    let userId = 1;  // TODO: to be based upon logged in user
    this.categoryService.getAllCategoriesRecipesForUser(userId).subscribe((categories) => {
      this.categories = categories;
      let sortedAllCategoriesRecipes = this.categoryUtility.sortCategoryRecipes(categories);
      this.sortedCategories = sortedAllCategoriesRecipes['sortedCategories'];
      
      if (this.selectedCategoryName == 'All') {
        this.sortedRecipes = sortedAllCategoriesRecipes['sortedRecipes'];
      } else {
        this.onSelectCategory(this.selectedCategoryName);
      }
    });
  }

  onSelectCategory(selectedCategoryName: string): void {
    this.selectedCategoryName = selectedCategoryName;
    this.selectedRecipeName = undefined;
    this.sortedRecipes = this.categoryUtility.getCategoryRecipes(selectedCategoryName, this.categories);
  }

  onSelectRecipe(selectedRecipeName: string): void {
    this.selectedRecipeName = selectedRecipeName;
  }

  addCategory(): void {
    this.setupModal(CategoryAddModalComponent);
  }

  editCategory(): void {
    console.log('editCategory called');
  }

  setupModal(modalComponent: Type<any>): void {
    let config = new MdDialogConfig();
    config.disableClose = true;
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.mdDialog.open(modalComponent, config);
    this.dialogRef.componentInstance.selectedCategoryName = this.selectedCategoryName;
    this.dialogRef.afterClosed().subscribe(
      () => {
        this.selectedCategoryName = this.dialogRef.componentInstance.selectedCategoryName;
        this.dialogRef = null;
        this.getCategoriesRecipes();
      },
      error => { console.log('categories.component::setupModal error occurred'); }
    );
  }
}
