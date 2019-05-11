import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cprod',
  templateUrl: './cprod.component.html',
  styleUrls: ['./cprod.component.css']
})
export class CprodComponent implements OnInit {

  @Input() itemProd: {idP: number, imageP: string, nameP: string, discrP: string, priseP: number};
  @Input() style: string;
  @Output() addId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addToCart(id: number):void {
    this.addId.emit(id);
  }
}
