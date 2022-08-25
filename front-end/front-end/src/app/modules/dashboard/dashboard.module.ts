import {DashboardComponent} from "./dashboard.component";
import { NgModule } from '@angular/core';
import {AuthModule} from "../auth/auth.module";

@NgModule({
  declarations: [DashboardComponent ],
  imports : [AuthModule]
})

export class DashboardModule {

}
