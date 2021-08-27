import { STREET_SUFFIX } from "src/models/address";
import { Store } from "src/models/store";

export class HMart {
  getStoreName() {
    return cy.get('.location-header');
  }

  getStoreAddress() {
    return cy.get('.location-data-content').children().first();
  }

  getStoreInfo(list: Store[]) {
    this.getStoreName().then((storeName) => {
      this.getStoreAddress().then((storeAddress) => {
        list.push({ name: storeName.text(), ...this.parseAddress(storeAddress.text()) })
      })
    })
  }

  parseAddress(address: string) {
    address = address.trim();
    let [remaining, address1] = this.findAddress1(address);
    const split = remaining.split(' ');
    const zip = split[split.length - 1];
    const state = split[split.length - 2];
    while(!/[a-zA-Z]/.exec(remaining.charAt(0))) {
      remaining = remaining.substring(1);
    }
    const city = remaining.substring(0, remaining.indexOf(','));
    return {
      fullAddress: address1 + ', ' + city + ', ' + state + ' ' + zip,
      address1,
      zip,
      state,
      city
    }
  }

  findAddress1(address: string) {
    for(let suffix of STREET_SUFFIX) {
      let loc = address.toLowerCase().indexOf(' ' + suffix.toLowerCase());
      if(loc !== -1) {
        loc += suffix.length + 1
        cy.log(suffix);
        return [address.substring(loc), address.substring(0, loc)]
      }
    }
    return 'No suffix?';
  }
}
