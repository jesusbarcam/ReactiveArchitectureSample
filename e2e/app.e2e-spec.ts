import { ReactiveArchitectureSamplePage } from './app.po';

describe('reactive-architecture-sample App', () => {
  let page: ReactiveArchitectureSamplePage;

  beforeEach(() => {
    page = new ReactiveArchitectureSamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
