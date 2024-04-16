import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  allProducts:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllProducts()
  }

  // get products
  getAllProducts=()=>{
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.allProducts=res
        // console.log(this.allProducts);
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  // delete product
  deleteProducts=(id:Number)=>{
    this.api.deleteProduct(id).subscribe({
      next:(res:any)=>{
        console.log('deleted',res);
        
        this.getAllProducts()
      },
      error:(err:any)=>{
        alert('Cannot perform action now')
      }
    })
  }

}
