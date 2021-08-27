import { Store } from "src/models/store";

export class Ranch {
  getStoreInfo(stores: Store[]) {
    cy.get('.fp-store-title').each((store) => {
      // too lazy to clean up
      const name = store.children().first().children().first().html();
      let data = store.children().eq(1).html().split('<br>');
      
      if(data.length === 4) {
        data.splice(2, 1);
      }

      data = data.filter((dat) => dat.indexOf('#') === -1);

      if(data.length === 3) {
        data.splice(0, 1);
      }

      data[0] = data[0].trim();
      data[1] = data[1].trim();
      if(data[0].charAt(data[0].length-1) === '.') {
        data[0] = data[0].slice(0, -1);
      }

      const details = data[1].split(',');
      const city = details[0];
      const detailsL2 = details[1].trim().split(' ');
      const state = detailsL2[0];
      const zip = detailsL2[1];

      stores.push({
        name,
        fullAddress: data[0] + ', ' + data[1],
        address1: data[0],
        zip,
        state,
        city
      })
    });
  }
}