import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { WordleApp } from './wordle-app';

describe('App Root', () => {
  let page: SpecPage;
  let rootEl: HTMLWordleAppElement;
  let rootInst: WordleApp;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [WordleApp],
      html: `<wordle-app />`,
    });
    rootEl = page.root as HTMLWordleAppElement;
    rootInst = page.rootInstance as WordleApp;
    await page.waitForChanges();
  });

  it('renders page the app container', async () => {
    expect(rootEl.querySelector('h1').textContent).toMatch(/Wordle of the day: [a-zA-Z]{5}/)
  });
});
