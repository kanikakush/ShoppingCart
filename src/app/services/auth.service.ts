import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

public urlUser='http://localhost:3000/user';
  public urlPro='http://localhost:3000/allProducts';
  public urlCloths='http://localhost:3000/Cloths';
  public urlElectronics='http://localhost:3000/electronics';
   public info:any=[];
  constructor(private route:Router,
    private http:HttpClient
    ) {
      this.http.get('http://localhost:3000/user').subscribe(data=>{
        this.info=data;
        console.log(this.info);

      })
     }
    getUsers(){

      return this.http.get(this.urlUser);
  }
  getShoes()
  {
    return this.http.get('http://localhost:3000/shoes');
  }
    getAllProducts(){
        return this.http.get(this.urlPro);
    }
    getElectronics()
    {
      return this.http.get(this.urlElectronics);
    }
    getCloths()
    {
      return this.http.get(this.urlCloths);
    }
    loginAuth(mail:any,pass:any)
    {
      console.log(mail);
      console.log(pass);
      for(let i = 0; i < this.info.length; i++){
        console.log("inside for service");
        if(mail===this.info[i].email && pass===this.info[i].password )
        {
            console.log("matched");
            localStorage.setItem('currentuser',this.info[i].email);
            localStorage.setItem('token','authenticated');
            //this.route.navigateByUrl("/products")

            return true;
        }
      }


    }

}
