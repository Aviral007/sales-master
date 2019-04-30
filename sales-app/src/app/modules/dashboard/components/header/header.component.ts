import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }
  logout(){ 
    localStorage.clear;
    this.routerExtensions.navigate(['login']); 
    }

}
