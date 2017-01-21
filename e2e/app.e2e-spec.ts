import { RecipeBoxPage } from './app.po';

describe('recipe-box App', function() {
  let page: RecipeBoxPage;

  beforeEach(() => {
    page = new RecipeBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
