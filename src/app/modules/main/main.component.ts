import { Component } from "@angular/core";

@Component({
  template: `
    <div class="app-container">
      <mt-menu-bar></mt-menu-bar>
      <mt-map></mt-map>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
  selector: `mt-main`
})
export class MainComponent {}
