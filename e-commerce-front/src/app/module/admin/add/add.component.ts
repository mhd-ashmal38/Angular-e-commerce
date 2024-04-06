import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private api:ApiService){}

  productData: any = {};

  addProduct=(formData: any)=>{
    this.api.addProduct(formData).subscribe({
      next:(res:any)=>{
        console.log('Product added',res);
        this.productData=res
        console.log(this.productData);
        alert('Product added')
        this.productData = {};
        
      },
      error:(err:any)=>{
        console.log('Failed',err);
        
      }
    })
  }

}
