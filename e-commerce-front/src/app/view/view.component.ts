import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  singleproduct:any={}

  constructor(private activated:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {

    this.activated.params.subscribe((data:any)=>{
      console.log(data);
      const{id}=data
      console.log(id);
      

      this.getProduct(id)
      
    })


  }

  getProduct=(id:any)=>{
    this.api.viewAproduct(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.singleproduct=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
