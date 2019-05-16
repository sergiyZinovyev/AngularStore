import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { Prod } from './../types';


@Component({
  selector: 'app-ccart',
  templateUrl: './ccart.component.html',
  styleUrls: ['./ccart.component.css']
})
export class CcartComponent implements OnInit, OnChanges, DoCheck {

  @Input() itemCart: Prod;
  @Input() addToCartTrigger: number;
  @Output() quantityProdInCart = new EventEmitter<number>();
  

  cartList: Prod[] = [];

  constructor() {
   }

  ngOnChanges(){
    if (!this.itemCart.idP) {this.cartList = []}
    else {
    

      if(this.checkArrIdVal(this.cartList, this.itemCart.idP) >= 0){
        this.cartList[this.checkArrIdVal(this.cartList, this.itemCart.idP)].numP += 1;
      }
      else{
        this.cartList.push(this.itemCart);
        this.cartList[this.cartList.length - 1].numP = 1;
      }
    }
  
    this.outputQuantityProdInCart(this.cartList);

    console.log(this.cartList);
    console.log(this.addToCartTrigger);
  }

  ngOnInit() {
  }

  ngDoCheck(){
  }

  checkArrIdVal(array:Prod[], val: number):number {
    for (let i: number = 0; i < array.length; i++){
      if (array[i].idP === val){
        return i;
      }
    }
  }

  countQuantity(array:Prod[]):number {
    let n:number = 0;
    for (let i: number = 0; i < array.length; i++){
      n += array[i].numP;
    }
    return n;
  }


  addProdToCart(id: number):void {
    this.cartList[this.checkArrIdVal(this.cartList, id)].numP += 1;
    this.outputQuantityProdInCart(this.cartList);
  }

  minusProdToCart(id: number):void {
    if (this.cartList[this.checkArrIdVal(this.cartList, id)].numP > 0){
      this.cartList[this.checkArrIdVal(this.cartList, id)].numP -= 1;
      this.outputQuantityProdInCart(this.cartList);
    }
  }

  delProd(id: number):void {
    this.cartList.splice(this.checkArrIdVal(this.cartList, id), 1);
    this.outputQuantityProdInCart(this.cartList);
  }

  totalCart(): number{
    let total: number = 0;
    for(let i: number = 0; i < this.cartList.length; i++){
      total += this.cartList[i].priseP * this.cartList[i].numP;
    }
    return total;
  }

  clear():Prod[] {
    this.quantityProdInCart.emit(0);
    return this.cartList = [];
  }

  outputQuantityProdInCart(i:Prod[]){
    this.quantityProdInCart.emit(this.countQuantity(i));
  }

}
