import { Ng2fireUni2Page } from './app.po';

describe('ng2fire-uni2 App', function() {
  let page: Ng2fireUni2Page;

  beforeEach(() => {
    page = new Ng2fireUni2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
