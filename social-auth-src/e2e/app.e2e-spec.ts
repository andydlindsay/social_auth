import { SocialAuthSrcPage } from './app.po';

describe('social-auth-src App', () => {
  let page: SocialAuthSrcPage;

  beforeEach(() => {
    page = new SocialAuthSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
