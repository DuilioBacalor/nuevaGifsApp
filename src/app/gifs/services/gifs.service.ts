import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// ymLltV1dpkS9w5wR1Ae6X5mR2ny402CG
@Injectable({
  providedIn: 'root'
})
export class GifsService {
private apiKey='ymLltV1dpkS9w5wR1Ae6X5mR2ny402CG';
 private _historial:string[]=[];
//  TODO: Cambiar any por su tipo correspondiente
 public resultados:any;

 get historial(){

  return [...this._historial];
 }

 constructor(private http:HttpClient){
  

 }

 buscarGifs( query:string){

  query.trim().toLocaleLowerCase;
if(!this._historial.includes(query)){
  this._historial.unshift(query);
  this._historial=this._historial.splice(0,10);
  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=ymLltV1dpkS9w5wR1Ae6X5mR2ny402CG&q=${query} z&limit=10`)
  .subscribe((resp:any)=>{
    console.log(resp.data);
    this.resultados=resp.data;
  });



}

console.log(this._historial);
 }
}
