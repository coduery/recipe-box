import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private baseUrl = 'api/recipes';

  constructor(private http: Http) {}

  getRecipesForCategory(categoryId: number): Observable<any> {
    const url = `${this.baseUrl}?categoryId=${categoryId}`;
    return this.http.get(url)
               .map(recipes => recipes.json().data as Recipe[]);
  }
}
