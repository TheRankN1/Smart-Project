import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public username: string ='' ;
  public password: string ='' ;
  public confirmPassword : string='';

  constructor(private authService : AuthService , private router:Router) {}

  public register() {
    this.authService
      .register(this.username , this.password , this.confirmPassword)
      .subscribe((response) => {
        this.router.navigate(['/auth/login'])
      });
  }
}
