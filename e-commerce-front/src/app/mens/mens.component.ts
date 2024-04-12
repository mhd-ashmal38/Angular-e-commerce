import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  mens: any = [];
  originalProducts: any = []; // Store original products from API response
  selectedType: string = 'All'; // Default selection is 'All'

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getMensItems();
  }

  getMensItems = () => {
    this.api.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        // Filter products belonging to the "mens" category
        this.originalProducts = res.filter((product: any) => product.category === 'Mens');
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
      this.mens = this.originalProducts;
    } else {
      this.mens = this.originalProducts.filter((product: any) => product.type === type);
    }
  }

}
