import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  allProducts:any=[];
  filteredProducts: any = []; // Store filtered products
  selectedCategory: string = 'All'; // Default selection is 'All'
  searchKey:string=""

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
        this.filterProductsByCategory(); // Filter initially by default selection
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  // delete product
  deleteProducts(id:any){
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

  filterProductsByCategory = () => {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.allProducts; // Show all products
    } else {
      this.filteredProducts = this.allProducts.filter((product: any) => product.category === this.selectedCategory);
    }
  }  

}
