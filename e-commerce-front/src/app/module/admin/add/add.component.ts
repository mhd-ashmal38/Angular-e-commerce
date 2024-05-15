import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private api:ApiService, private _toastService: ToastService){}

  productData: any = {};

  addSuccessToast() {
    this._toastService.success('Product added');
  }

  addErrorToast() {
    this._toastService.error('Action failed, please try again after some time');
  }

  addProduct=(formData: any)=>{
    this.api.addProduct(formData).subscribe({
      next:(res:any)=>{
        this.productData=res
        console.log(this.productData);
        this.addSuccessToast()
        this.productData = {};
        
      },
      error:(err:any)=>{
        console.log('Failed',err);
        this.addErrorToast()
        
      }
    })
  }

}
