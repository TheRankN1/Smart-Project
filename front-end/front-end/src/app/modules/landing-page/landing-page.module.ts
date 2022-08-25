import { NgModule } from '@angular/core';
import {LandingPageComponent} from "./landing-page.component";
import {LandingPageRoutesModule} from "./landing-page.routes";

@NgModule({
  declarations: [LandingPageComponent],
  imports : [LandingPageRoutesModule]
})

export class LandingPageModule {}
