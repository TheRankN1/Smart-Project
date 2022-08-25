import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  constructor(private authService : AuthService) {}
  public user : Object = [];
  private username: string = '';
  private password: string = '';
  private confirmpassowrd: string = '';
  ngOnInit(){
    this.authService.register(this.username,this.password,this.confirmpassowrd).subscribe((response ) => {
      this.user=response;
    })
  }
}

