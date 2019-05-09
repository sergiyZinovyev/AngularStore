import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ccart',
  templateUrl: './ccart.component.html',
  styleUrls: ['./ccart.component.css']
})
export class CcartComponent implements OnInit {

  @Input() itemCart: {idP: number, imageP: string, nameP: string, discrP: string, priseP: number};

  constructor() { }

  ngOnInit() {
  }

}
