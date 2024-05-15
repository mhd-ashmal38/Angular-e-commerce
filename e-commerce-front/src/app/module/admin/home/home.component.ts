import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topProducts:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getTopProducts()
  }

  getTopProducts=()=>{
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.topProducts=res
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
