import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // in formbuilder there are 3 items
  // form group
  // form array
  // form control name

  // form group
  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}

  register(){
    
    if(this.registerForm.valid){
      const username=this.registerForm.value.username
      const email=this.registerForm.value.email
      const password=this.registerForm.value.password

      console.log(`${username} ${email} ${password}`);

      const reqBody={username,email,password}

      this.api.registerApi(reqBody).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.route.navigateByUrl('user/login')
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
      
    }
    else{
      alert("invalid error")
    }
  }

}
