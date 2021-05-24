import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 public navNum=0;
  public logo:string='./../../../assets/logo3.png';
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Logout()
  {
this.route.navigateByUrl('logout');
  }
  register(){
    this.route.navigateByUrl('register');
  }
  home(){
    this.navNum=2
    console.log("inside home function in headder")
    this.route.navigateByUrl('landing-page');
    console.log('hiii')
  }
}
