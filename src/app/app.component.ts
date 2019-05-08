import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularstore';
  newProdList: { imageP: string, nameP: string, discrP: string, priseP: number}[] = [
    {
      imageP: "http://lorempixel.com/400/250/abstract",
      nameP: "Picture #1",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2000
    },
    {
      imageP: "http://lorempixel.com/400/250/abstract",
      nameP: "Picture #2",
      discrP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.",
      priseP: 2100
    }
    
  ]
}
