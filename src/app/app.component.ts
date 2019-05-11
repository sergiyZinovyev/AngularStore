import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list_grid: string = 'grid';
  hideCart: string = 'hide';
  prod_l_g: string = "genprod_grid";

  styleList(): void{
   this.list_grid='list'; 
   this.hideCart='hide';
   this.prod_l_g="genprod";
  }

  styleGrid(): void{
    this.list_grid='grid'; 
    this.hideCart='hide';
    this.prod_l_g="genprod_grid";
   }

  visCart(): void {
    if (this.hideCart == "hide"){
      this.hideCart = "cart";
      this.list_grid = "hide";
    }
    else{
      this.hideCart = "hide";
      this.list_grid = "grid";
    }
  }

  newProdList: {idP: number, imageP: string, nameP: string, discrP: string, priseP: number}[] = [
    {
      idP: 1,
      imageP: "http://lorempixel.com/400/250/abstract",
      nameP: "Picture #1",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2000
    },
    {
      idP: 2,
      imageP: "http://lorempixel.com/400/250/animals",
      nameP: "Picture #2",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2100
    },
    {
      idP: 3,
      imageP: "http://lorempixel.com/400/250/business",
      nameP: "Picture #3",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2300
    },
    {
      idP: 4,
      imageP: "http://lorempixel.com/400/250/city",
      nameP: "Picture #4",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 3100
    },
    {
      idP: 5,
      imageP: "http://lorempixel.com/400/250/food",
      nameP: "Picture #5",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 4100
    },
    {
      idP: 6,
      imageP: "http://lorempixel.com/400/250/fashion",
      nameP: "Picture #6",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2500
    },
    {
      idP: 7,
      imageP: "http://lorempixel.com/400/250/nature",
      nameP: "Picture #7",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 5100
    },
    {
      idP: 8,
      imageP: "http://lorempixel.com/400/250/technics",
      nameP: "Picture #8",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 6100
    },
    {
      idP: 9,
      imageP: "http://lorempixel.com/400/250/transport",
      nameP: "Picture #9",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2900
    }
  ]

  newCartList: {idP: number, imageP: string, nameP: string, discrP: string, priseP: number, numP?: number}[] = []
  
  addToCart(id: number): void{
    if(this.checkArrIdVal(this.newCartList, id) >= 0){
      this.newCartList[this.checkArrIdVal(this.newCartList, id)].numP += 1;
    }
    else{
      this.newCartList.push(this.newProdList[id-1]);
      this.newCartList[this.newCartList.length - 1].numP = 1;
    }
    console.log(this.newCartList);
  }

  addProd(id: number): void{
    this.newCartList[this.checkArrIdVal(this.newCartList, id)].numP += 1;
  }

  minusProd(id: number): void{
    if(this.newCartList[this.checkArrIdVal(this.newCartList, id)].numP > 0){
      this.newCartList[this.checkArrIdVal(this.newCartList, id)].numP -= 1;
    }
  }

  delProdItem(id: number): void{
    this.newCartList.splice(this.checkArrIdVal(this.newCartList, id), 1);
  }

  totalCart(): number{
    let total: number = 0;
    for(let i: number = 0; i < this.newCartList.length; i++){
      total += this.newCartList[i].priseP * this.newCartList[i].numP;
    }
    return total;
  }

  clear():{idP: number, imageP: string, nameP: string, discrP: string, priseP: number, numP?: number}[] {
    return this.newCartList = [];
  }

  checkArrIdVal(array:{idP: number, imageP: string, nameP: string, discrP: string, priseP: number, numP?: number}[], val: number):number {
    for (let i: number = 0; i < array.length; i++){
      if (array[i].idP === val){
        return i;
      }
    }
  }
  

}
