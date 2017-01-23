import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';

@Injectable()
export class CategoryService{
  private categoriesUrl = 'api/categories';

  constructor(private http: Http) { }

  getCategories(): Observable<any> {
    return this.http.get(this.categoriesUrl)
               .map(response => response.json().data as Category[]);
  }
}