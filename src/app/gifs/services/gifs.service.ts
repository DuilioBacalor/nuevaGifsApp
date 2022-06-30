import { Injectable } from '@angular/core';
// ymLltV1dpkS9w5wR1Ae6X5mR2ny402CG
@Injectable({
  providedIn: 'root'
})
export class GifsService {
private apiKey='ymLltV1dpkS9w5wR1Ae6X5mR2ny402CG';
 private _historial:string[]=[];

 get historial(){

  return [...this._historial];
 }

 buscarGifs( query:string){

  query.trim().toLocaleLowerCase;
if(!this._historial.includes(query)){
  this._historial.unshift(query);
  this._historial=this._historial.splice(0,10);
}

console.log(this._historial);
 }
}
