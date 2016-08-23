import { MarsColonyApp2Page } from './app.po';

describe('mars-colony-app-2 App', function() {
  let page: MarsColonyApp2Page;

  beforeEach(() => {
    page = new MarsColonyApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
