import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ccart',
  templateUrl: './ccart.component.html',
  styleUrls: ['./ccart.component.css']
})
export class CcartComponent implements OnInit {

  @Input() itemCart: {idP: number, imageP: string, nameP: string, discrP: string, priseP: number, numP?: number};
  @Output() addP = new EventEmitter<number>();
  @Output() minusP = new EventEmitter<number>();
  @Output() del = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addProdToCart(id: number):void {
    this.addP.emit(id);
  }

  minusProdToCart(id: number):void {
    this.minusP.emit(id);
  }

  delProd(id: number):void {
    this.del.emit(id);
  }

}
