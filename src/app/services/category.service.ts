import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/category';
import { environment } from '../../environments/environment';

@Injectable()
export class CategoryService{
  private baseUrl = `${environment.backendUrl}/api/Categories`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAllCategoriesRecipesForUser(userId: number): Observable<any> {
    let url = `${this.baseUrl}?filter[where][userId]=${userId}&filter[include]=recipes`
    return this.http.get(url)
               .map(response => response.json());
  }

  addCategory(userId: number, categoryName: string): Observable<any> {
    let url = `${this.baseUrl}`;
    return this.http.post(url, JSON.stringify({id: 0, name: categoryName, recipes: [], userId: userId}), {headers: this.headers})
               .map(response => response.json().data);
  }
}
