import { CryptocurrencyTrackerCliPage } from './app.po';

describe('cryptocurrency-tracker-cli App', function() {
  let page: CryptocurrencyTrackerCliPage;

  beforeEach(() => {
    page = new CryptocurrencyTrackerCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
