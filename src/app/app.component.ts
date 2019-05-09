import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list_grid: string = 'grid';
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
      imageP: "http://lorempixel.com/400/250/abstract",
      nameP: "Picture #2",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2100
    },
    {
      idP: 3,
      imageP: "http://lorempixel.com/400/250/abstract",
      nameP: "Picture #3",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2300
    }
    
  ]
  listMeth(): void {
    this.list_grid = 'list';
  }
  newCartList: {idP: number, imageP: string, nameP: string, discrP: string, priseP: number}[] = []
  addToCart(id){
    this.newCartList.push(this.newProdList[id-1])
  }
}
