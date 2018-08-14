import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() coinObverse: string;
  @Input() coinReverse: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
