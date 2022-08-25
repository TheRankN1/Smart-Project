import {Component, OnInit} from '@angular/core';
import {PageService} from "./landing-page.services";
import {response} from "express";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit{

  public users : any [] = [];

  constructor(public pageService : PageService) {
  }

  ngOnInit(){
    this.pageService.getUsers().subscribe((response:any)=> {
      this.users = response.username;
    })
    }
}
