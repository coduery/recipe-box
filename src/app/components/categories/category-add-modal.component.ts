import { Component } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'recipe-box-category-add',
  templateUrl: 'category-add-modal.component.html'
})
export class CategoryAddModalComponent {

  constructor(public dialogRef: MdDialogRef<any>) { }
  
  
}