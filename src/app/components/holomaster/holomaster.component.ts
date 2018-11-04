import { Component, OnInit } from '@angular/core';
import { CoinSettings, SideSettings } from './coin.model';

@Component({
  selector: 'app-holomaster',
  templateUrl: './holomaster.component.html',
  styleUrls: ['./holomaster.component.css']
})
export class HolomasterComponent implements OnInit {

  coins: CoinSettings[] = [
    new CoinSettings(["Research"], { theme:  "purple" }, [], { url: this.getFctcoinUrl(".2") }),
    new CoinSettings(["Education", "Emulation"], { theme: "indigo" }, [], { url: this.getFctcoinUrl(".5") }),
    new CoinSettings(["Medicine"], { theme: "red" }, [], { url: this.getFctcoinUrl("10") }),
    new CoinSettings(["Holo Master"], { theme: "beige" }, [], { url: "https://quantumfunds.files.wordpress.com/2018/11/factom.png" }),
    new CoinSettings(["Technology", "Therapies", "Tunnels", "Tomography"], { theme: "turquoise" }, [], { url: this.getFctcoinUrl("1") }),
    new CoinSettings(["Art", "Applications", "Algorithm"], { theme: "orange" }, [], { url: this.getFctcoinUrl("5") }),
    new CoinSettings(["Smart", "Sustainability", "Systems", "Simulations"], { theme: "olive" }, [], { url: this.getFctcoinUrl("2") }),
  ]

  constructor() { }

  ngOnInit() {
  }

  getFctcoinUrl(value) {
    return `http://quantumfoundation.eu/wp-content/uploads/2017/06/FCTcoins_${value}_512.png`;
  }

  getHexSide(settings: SideSettings, size) {
    console.log(settings)
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  selectHex(obverse, event: MouseEvent) {
  }

}
