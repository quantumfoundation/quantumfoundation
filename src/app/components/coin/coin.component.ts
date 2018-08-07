import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() coinValue: string;
  @Input() coinReverse: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
    console.log('coinValue', this.coinValue);
  }

}
