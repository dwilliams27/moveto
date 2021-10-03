import { Component } from "@angular/core";


@Component({
  template: `
  <ul>
    <li><a href="default.asp">Home</a></li>
    <li><a href="news.asp">News</a></li>
    <li><a href="contact.asp">Contact</a></li>
    <li><a href="about.asp">About</a></li>
  </ul>
  `,
  styleUrls: [`./menu-bar.component.scss`],
  selector: `menu-bar`
})
export class MenuBarComponent {}
