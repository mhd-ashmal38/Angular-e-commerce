import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newArrivals:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getNewArrivals()
  }

  getNewArrivals=()=>{
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.newArrivals=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
