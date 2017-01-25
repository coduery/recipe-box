import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 1, name: 'Joe', pw: 'demo'}
    ];

    let categories = [
      {
        id: 1,
        name: 'All',
        userId: 1
      },
      {
        id: 2,
        name: 'Mexican',
        recipes: [
          {id: 4, name: 'Carnitas', categoryId: 3},
          {id: 5, name: 'Quesadillas', categoryId: 3},
        ],
        userId: 1
      },
      {
        id: 3,
        name:'Italian',
        recipes: [
          {id: 1, name: 'Chicken Cacciatore', categoryId: 2},
          {id: 2, name: 'Pizza', categoryId: 2},
          {id: 3, name: 'Spaghetti', categoryId: 2},
        ],
        userId: 1
      }
    ];

    return {users, categories};
  }
}