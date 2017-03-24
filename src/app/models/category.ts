import { Recipe } from './recipe';

export class Category {
  id: number;
  name: string;
  recipes: Recipe[];
  userId: number;
}