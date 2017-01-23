import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'recipe-box-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})
export class HomeComponent{
  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories,
                   error => console.log('Error fetching categories'));
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }
}