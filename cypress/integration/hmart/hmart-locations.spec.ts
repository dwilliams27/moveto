import { HMart } from "cypress/pages/hmart";
import { Store } from "src/models/store";

describe('scrape hmart location data', () => {
  let storeURLs: string[] = [];
  
  it('gets store urls', () => {
    cy.visit('https://www.hmart.com/ourstores');
    cy.get('.store-name').each((store) => {
      if(store) {
        const href = store.attr('href');
        if(href) {
          cy.log(href);
          storeURLs.push(href);
        }
      }
    });
    cy.writeFile('data/hmart/urls.json', storeURLs);
  })

  it('scrapes store data', () => {
    const stores: Store[] = [];
    const page = new HMart();
    for(let url of storeURLs) {
      cy.log(url);
      cy.visit(url);
      page.getStoreInfo(stores);
      cy.writeFile('data/hmart/hmarts.tmp.json', stores);
    }
    cy.writeFile('data/hmart/hmarts.json', stores);
  })
})
