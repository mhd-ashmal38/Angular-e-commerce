import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(filteredProducts: any=[], searchTerm:string,property:string): any[] {
    let res:any=[];

    if(!filteredProducts||searchTerm===""||property===""){
      return filteredProducts
    }
    else{
      filteredProducts.forEach((item:any) => {
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
          res.push(item)
        }
      });
    }
    return res;
  }

}
