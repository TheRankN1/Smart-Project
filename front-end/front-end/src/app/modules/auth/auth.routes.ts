import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthShellComponent } from './auth-shell.component';
import { LoginComponent} from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";


const routes: Routes = [
  {
    path: '',
    component: AuthShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutesModule {}
