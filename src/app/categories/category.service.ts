import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';

@Injectable()
export class CategoryService{
  private baseUrl = 'api/categories';

  constructor(private http: Http) { }

  getAllCategoriesRecipesForUser(userId: number): Observable<any> {
    const url = `${this.baseUrl}?userId=${userId}`;
    return this.http.get(url)
               .map(response => response.json().data as Category[]);
  }
}
