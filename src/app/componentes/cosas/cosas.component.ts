import { Component, OnInit } from '@angular/core';


class Producto{
  nombre:String

}

@Component({
  selector: 'app-cosas',
  templateUrl: './cosas.component.html',
  styleUrls: ['./cosas.component.scss']
})
export class CosasComponent implements OnInit{
  producto=new Producto();
  productos=[];

  nombre=""
  constructor() { 
    var array = localStorage.getItem('producto');
    // Se parsea para poder ser usado en js con JSON.parse :)
    this.productos = JSON.parse(array);
    console.log(array);
}
ngOnIn

ngOnInit(){
  this.producto.nombre=""

}
agregar(){

  if(this.nombre!=""){
    this.productos.push(this.nombre)
    localStorage.setItem('producto',JSON.stringify(this.productos))        
    this.nombre=""
  }
 
}
eliminar(x){
  var productosAux=[]
  this.productos.forEach(e=>{
    if(e!=x){
      productosAux.push(e)
    }
  })
  this.productos=productosAux
  localStorage.setItem('producto',JSON.stringify(this.productos))
}

}

