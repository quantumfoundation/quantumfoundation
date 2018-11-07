import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels-menu',
  templateUrl: './levels-menu.component.html',
  styleUrls: ['./levels-menu.component.css']
})
export class LevelsMenuComponent implements OnInit {

  menuItems = [
    {name: "Home", link:"/home"},
    {name: "Contact", link:"/contact"},
    {name: "Social", link:"/social"},
    {name: "Projects", link:"/projects"},
    {name: "", link:"/"},
    {name: "", link:"/"},
    {name: "", link:"/"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
