import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted: boolean = false;
  public info: any;
  public em: any=[];
  public mail: any;
  public pass:any;
  constructor(

    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private AuthService:AuthService
  ) {
  this.getData();
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPwd: ['', Validators.required],
    });
  //this.verify()

  }

  // verify()
  // {
  //   if(localStorage.getItem('token'))
  //   {
  //     localStorage.removeItem('token');
  //   }

  // }
  loginSubmit(){
    this.isSubmitted = true
    this.em=this.loginForm.value;
    console.log(this.em);

    this.mail=this.em.loginEmail;
    console.log(this.mail);
    this.pass=this.em.loginPwd;
    console.log(this.pass);

    //console.log(this.loginForm.controls)
    if(this.loginForm.valid){
      console.log("valid input")

      if(this.AuthService.loginAuth(this.mail,this.pass))
      { console.log("heyyy under auth");

      alert("login Successfully");
        this.router.navigateByUrl("/products")
      }

    }

  }
  getData(){
    this.http.get('http://localhost:3000/user').subscribe((data) => {
      this.info = data;
      console.log(this.info);

    })
    }
  get returnLoginFormControl(){
    return this.loginForm.controls;
  }

}
