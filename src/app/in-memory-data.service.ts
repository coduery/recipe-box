import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let categories = [
      {id: 1, name: 'All'},
      {id: 3, name: 'Italian'},
      {id: 2, name: 'Mexican'}
    ];
    return {categories};
  }
}