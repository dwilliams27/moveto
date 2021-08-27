import { Ranch } from "cypress/pages/ranch";
import { Store } from "src/models/store";

describe('scrape 99ranch location data', () => {
  let storeURLs: string[] = [];
  
  it('scrapes store data', () => {
    cy.visit('./cypress/fixtures/ranch.html');

    const stores: Store[] = [];
    const page = new Ranch();
    page.getStoreInfo(stores);
    cy.writeFile('data/ranch/ranch99s.json', stores);
  })
})
