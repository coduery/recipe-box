import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/category';

@Injectable()
export class CategoryService{
  private baseUrl = 'api/categories';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAllCategoriesRecipesForUser(userId: number): Observable<any> {
    let url = `${this.baseUrl}?userId=${userId}`;
    return this.http.get(url)
               .map(response => response.json().data as Category[]);
  }

  addCategory(userId: number, categoryName: string): Observable<any> {
    let url = `${this.baseUrl}`;
    return this.http.post(url, JSON.stringify({name: categoryName, recipes: [], userId: userId}), {headers: this.headers})
               .map(response => response.json().data);
  }
}
