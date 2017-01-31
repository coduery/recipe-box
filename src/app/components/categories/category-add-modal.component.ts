import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'recipe-box-category-add',
  templateUrl: 'category-add-modal.component.html'
})
export class CategoryAddModalComponent {

  selectedCategoryName: string;

  constructor(private dialogRef: MdDialogRef<any>,
              private categoryService: CategoryService) { }

  saveAddedCategory(categoryName: string): void {
    let userId = 1;  // Todo userid to be based on user login
    this.categoryService.addCategory(userId, categoryName).subscribe((categoryData) => {
      this.selectedCategoryName = categoryName;
      this.dialogRef.close();
    });
  }
}