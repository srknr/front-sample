import { getGreeting } from '../support/app.po';

describe('front-sample', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to front-sample!');
  });
});
