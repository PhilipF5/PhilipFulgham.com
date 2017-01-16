import { PhilipFulghamV2Page } from './app.po';

describe('philip-fulgham-v2 App', function() {
  let page: PhilipFulghamV2Page;

  beforeEach(() => {
    page = new PhilipFulghamV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
