import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { MapComponent } from "./map/map.component";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";

@NgModule({
  declarations: [
    MainComponent,
    MenuBarComponent,
    MapComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}
