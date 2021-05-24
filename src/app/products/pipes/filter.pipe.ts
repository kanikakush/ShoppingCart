import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
const { isArray } = Array;
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  public productUrl = "http://localhost:3000/allProducts";
  public productInfo: any;

  constructor(public http: HttpClient) {
    this.http.get('http://localhost:3000/allProducts').subscribe(data=>{
      this.productInfo = data});
    }
    transform(productInfo, find: string): unknown {
      if(!productInfo) return[];
      if(!find) return productInfo;
      find = find.toLowerCase();
      return this.search(productInfo, find);
    }

    search(entries: any[], search: string){

      search = search.toLowerCase();

      return entries.filter(function (obj){
        const keys: string[] = Object.keys(obj);
        return keys.some(function (key){
          const value = obj[key];
          if(isArray(value)){
            return value.some(v=>{
              return v.toLowerCase().includes(search);
            })
          }
          else if(!isArray(value)){
            return value.toString().toLowerCase().includes(search);
          }
        })
      })
    }

}
