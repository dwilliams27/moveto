import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";

@NgModule({
  declarations: [
    MainComponent,
    MenuBarComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}
