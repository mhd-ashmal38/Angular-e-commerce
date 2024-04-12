import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  kids: any = [];
  originalProducts: any = []; // Store original products from API response
  selectedType: string = 'All'; // Default selection is 'All'

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getKidsItems();
  }

  getKidsItems = () => {
    this.api.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        // Filter products belonging to the "Kids" category
        this.originalProducts = res.filter((product: any) => product.category === 'Kids');
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
      this.kids = this.originalProducts;
    } else {
      this.kids = this.originalProducts.filter((product: any) => product.type === type);
    }
  }


}
