import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-ccart',
  templateUrl: './ccart.component.html',
  styleUrls: ['./ccart.component.css']
})
export class CcartComponent implements OnInit, OnChanges, DoCheck {

  @Input() itemCart;
  

  cartList = [];

  constructor() {
   }


  ngOnInit() {

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
  
    console.log(this.cartList);
  }

  ngDoCheck(){
    /*if (!this.itemCart.idP) {this.cartList = []}
    else {
    

      if(this.checkArrIdVal(this.cartList, this.itemCart.idP) >= 0){
        this.cartList[this.checkArrIdVal(this.cartList, this.itemCart.idP)].numP += 1;
      }
      else{
        this.cartList.push(this.itemCart);
        this.cartList[this.cartList.length - 1].numP = 1;
      }
    }
  
    console.log(this.cartList);*/
  }



  checkArrIdVal(array:{idP: number, imageP: string, nameP: string, discrP: string, priseP: number, numP?: number}[], val: number):number {
    for (let i: number = 0; i < array.length; i++){
      if (array[i].idP === val){
        return i;
      }
    }
  }


  addProdToCart(id: number):void {
    this.cartList[this.checkArrIdVal(this.cartList, id)].numP += 1;
  }

  minusProdToCart(id: number):void {
    if (this.cartList[this.checkArrIdVal(this.cartList, id)].numP > 0){
      this.cartList[this.checkArrIdVal(this.cartList, id)].numP -= 1;
    }
  }

  delProd(id):void {
    this.cartList.splice(this.checkArrIdVal(this.cartList, id), 1);
  }

  totalCart(): number{
    let total: number = 0;
    for(let i: number = 0; i < this.cartList.length; i++){
      total += this.cartList[i].priseP * this.cartList[i].numP;
    }
    return total;
  }

  clear() {
    return this.cartList = [];
  }

}
