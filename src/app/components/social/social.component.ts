import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private fb: FacebookService) {   
    let initParams: InitParams = {
      appId: '258799841491074',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  
  ngOnInit() {
  }

}

