import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  womens: any = [];
  originalProducts: any = []; // Store original products from API response
  selectedType: string = 'All'; // Default selection is 'All'

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getWomensItems();
  }

  getWomensItems = () => {
    this.api.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        // Filter products belonging to the "womens" category
        this.originalProducts = res.filter((product: any) => product.category === 'Womens');
        this.filterProductsByType(); // Filter initially by default selection
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  filterProductsByType = () => {
    const type = this.selectedType;
    if (type === 'All') {
      this.womens = this.originalProducts;
    } else {
      this.womens = this.originalProducts.filter((product: any) => product.type === type);
    }
  }

}
