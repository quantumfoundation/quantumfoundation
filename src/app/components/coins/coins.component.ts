import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  qtumReverseUrl: string = "http://quantumfoundation.eu/wp-content/uploads/2018/08/qtum_coin_rotated.png";
  ethReverseUrl: string = "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_double_flipped.png";
  initialImageUrl: string = "http://quantumfoundation.eu/wp-content/uploads/2016/10/Quantum-foundation-sign-in-4.png";

  constructor() { }

  ngOnInit() {
  }

  getRoundBackground(imageUrl) {
    return { 'background-image': 'url(' + imageUrl + ')'};
  }

  coinObverse(coinValue) {
    return { 'background-image': 'url(http://quantumfoundation.eu/wp-content/uploads/2017/06/FCTcoins_' + coinValue + '_512.png' };
  }

}
