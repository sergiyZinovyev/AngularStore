import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cprod',
  templateUrl: './cprod.component.html',
  styleUrls: ['./cprod.component.css']
})
export class CprodComponent implements OnInit {

  @Input() itemProd: {imageP: string, nameP: string, discrP: string, priseP: number};

  constructor() { }

  ngOnInit() {
  }

}
