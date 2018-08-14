import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holotech',
  templateUrl: './holotech.component.html',
  styleUrls: ['./holotech.component.css']
})
export class HolotechComponent implements OnInit {

  qtumReverseUrl: string = "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_double_flipped.png";
  
  holoPRUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/qpr_rev.png";
  holoQKUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/holoquantumknowledge.png";
  holoQDUrl: string = "https://quantumfunds.files.wordpress.com/2018/04/qhqd.png";
  holoQTUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/holoquantumtherapies.png";
  holoQNUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/qhqm.png";
  holoQAUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/holoquantumapplications.png";
  holoQRUrl: string = "https://quantumfunds.files.wordpress.com/2018/04/qhqr.png";
  holoQVUrl: string = "https://quantumfunds.files.wordpress.com/2018/08/holoquantumvisualizations.png";

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

}
