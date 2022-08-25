import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: string ='' ;
  public password: string ='' ;

  constructor(private authService : AuthService , private router:Router) {}

  public login() {
    this.authService.login(this.username, this.password)
      .subscribe(
      (response) => {
        console.log(response);
        console.log('Ai fost logat cu success!!');
        this.router.navigate(['/page'])
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
