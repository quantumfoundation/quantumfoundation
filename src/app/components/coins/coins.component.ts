import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  initialImageUrl: string = "http://quantumfoundation.eu/wp-content/uploads/2016/10/Quantum-foundation-sign-in-4.png";

  constructor() { }

  ngOnInit() {
  }

}
