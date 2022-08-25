import { CommonModule } from '@angular/common';
import { NgModule, Type} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthShellComponent} from "./auth-shell.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthRoutesModule} from "./auth.routes";

const COMPONENTS: any[] | Type<any> = [
  AuthShellComponent,
  LoginComponent,
  RegisterComponent,
];

@NgModule({
  declarations: [LoginComponent , RegisterComponent , AuthShellComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    AuthRoutesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [COMPONENTS]
})
export class AuthModule {}
