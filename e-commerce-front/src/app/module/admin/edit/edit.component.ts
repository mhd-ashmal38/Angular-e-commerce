import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ToastService } from 'angular-toastify';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId: any;
  product: any = {};
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private api: ApiService,private http:HttpClient, private _toastService: ToastService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id'); 
      // console.log(this.productId);
      this.fetchProductDetails();
    });
  }

  addSuccessToast() {
    this._toastService.success('Product updated');
  }

  addErrorToast() {
    this._toastService.error('Action failed, please try again after some time');
  }

  fetchProductDetails(): void {
    this.api.viewAproduct(this.productId).subscribe({
      next: (res: any) => {
        this.product = res;
      },
      error: (err: any) => {
        this.errorMessage = err.message;
      }
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    this.http.put(`http://localhost:3000/edit-product/${this.productId}`, this.product)
      .subscribe({
        next: (res: any) => {
          this.addSuccessToast()
          setTimeout(() => {
            this.router.navigateByUrl('/admin/view'); // Navigate after 3 seconds
          }, 3000);
        },
        error: (err: any) => {
          this.errorMessage = err.message;
          this.addErrorToast()
        }
      });
  }


}
