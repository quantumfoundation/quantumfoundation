import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holotech',
  templateUrl: './holotech.component.html',
  styleUrls: ['./holotech.component.css']
})
export class HolotechComponent implements OnInit {

  qtumReverseUrl: string = "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_double_flipped.png";

  holoPRUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/qpr_rev.png";

  obverseArray = [
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqk.png", "color": "#FFCBFF" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/04/qhqd.png", "color": "#CAC3F5" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqt.png", "color": "#F9CCD7" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/qhqm.png", "color": "#F1E6CD" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqa.png", "color": "#C6F0F0" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/04/qhqr.png", "color": "#F9C4A4" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqv.png", "color": "#F7F5BF" }
  ]

  constructor() { }

  ngOnInit() {
  }



  getHexSide(imageUrl, color) {
    return {
      'background-image': 'url(' + imageUrl + ')',
      'background-color': color,
      'background-size': '91%',
      'background-repeat': 'no-repeat'
    }
  }

  selectHex(obverse, event: MouseEvent) {
  }

}
