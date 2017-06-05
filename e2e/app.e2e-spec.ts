import { Modem56kPage } from './app.po';

describe('modem56k App', () => {
  let page: Modem56kPage;

  beforeEach(() => {
    page = new Modem56kPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
