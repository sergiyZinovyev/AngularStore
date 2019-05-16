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

  quantity: number = 0;
  itemCart: {idP?: number, imageP?: string, nameP?: string, discrP?: string, priseP?: number} = {};
  addToCartTrigger: number;
  
  addToCart(id: number): void{
    this.itemCart = this.newProdList[id-1];
    this.addToCartTrigger = Math.random();
    console.log(this.addToCartTrigger);
  }
  quantityProdInCart(id: number): number{
    this.quantity = id;
    return this.quantity
  }
  
  ngOnInit(){
    console.log(this.itemCart);
    
  }
  

}
