import { Recipe } from '../recipes/recipe';

export class Category {

  constructor(private recipe: Recipe) {}

  id: number;
  name: string;
  recipes: recipe[];
  userId: number;
}