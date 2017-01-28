import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
  private baseUrl = 'api/recipes';

  constructor(private http: Http) {}

}
