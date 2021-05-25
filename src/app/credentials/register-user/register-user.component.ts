import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordChecker } from "./../custom-validators/password-checkers";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public otp: any;
  public inputOtp: any;
  public mail: any;
  public info: any;
  public changeData: any;
  public someName: any;
public hivisible=false;
public form1=true;
newuser=false;

  public useremail: any;
  registerForm: FormGroup;
  submitted = true;

  em:any=[];
 // veriemail:any;
  public visible = true;
  constructor(
    private http: HttpClient,
    private route: Router,
    private formbuilder: FormBuilder
  ) {
    this.inputOtp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(this.inputOtp);
    this.getData();
  }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],//,Validators.pattern('/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/')
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.required],
      cart:[[]],
    },
      {
        validators: PasswordChecker('password', 'confirmPassword')
      })
  }
  get h() {
    return this.registerForm.controls;
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onRegister() {
     this.em=this.registerForm.value;
     console.log(this.em);
     this.mail=this.em.email;
     this.someName=this.em.firstName;
     console.log(this.someName);
     console.log(this.mail);
    if (this.registerForm.valid) {
      for(let i=0; i<this.info.length;i++)
      {
        console.log("inside for");

        if(this.mail==this.info[i].email)
        {
            alert("Aleady Registered User. Please enter another email")
            this.route.navigateByUrl('register');
            this.newuser=true;
            break;
        }
      }
      if(!this.newuser)
      {
        console.log("inside onregister new user");

        this.http.post('http://localhost:3000/user', this.registerForm.value).subscribe(data => {
          console.log(data);
        })
        alert("Verify Your email pppp ")
    this.hivisible=true;
    this.form1=false;
      }

      //this.route.navigateByUrl('login');
    }
  }

  public sendEmail(e: Event) {

    e.preventDefault();
    emailjs.sendForm('service_aep6pma', 'template_30zlbzk', e.target as HTMLFormElement, 'user_dKWs8t18AaBvn8wBBFsAB')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
  verify(){
    console.log("inside verify function")
    console.log(this.inputOtp);

    if(this.otp==this.inputOtp){
       alert("verified user");
       console.log("verified otp")
       this.route.navigateByUrl('login');

    }
    else{
      alert( "Wrong OTP")
    }
  }
  getData(){
    this.http.get('http://localhost:3000/user').subscribe(data => {this.info = data})
  }

}

