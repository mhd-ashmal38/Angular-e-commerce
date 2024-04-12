import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit  {

  user:any={}

  constructor(private route:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    
  }

  existingProduct(id:any){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      
      const {id}=res
      console.log(id);

      this.api.viewAproduct(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.user=res
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
      
    })
  }

}
