import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // in formbuilder there are 3 items
  // form group
  // form array
  // form control name

  // form group
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}

  login(){
    
    if(this.loginForm.valid){
      const email=this.loginForm.value.email
      const password=this.loginForm.value.password

      const reqBody={email,password}

      this.api.loginApi(reqBody).subscribe({
        next:(res:any)=>{
          this.route.navigateByUrl('/admin')
          
        },
        error:(err:any)=>{
          alert("Login failed. Please check your email and password.");
          console.log(err);
          
        }
      })
      
      
    }
    else{
      alert("Invalid form data. Please check your inputs.");
    }
  }

}
