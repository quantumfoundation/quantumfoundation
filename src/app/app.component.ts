import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  param = { value: 'world' };

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('gb');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('gb');

  }
  ngOnInit() {
    let vid = <HTMLMediaElement>document.getElementById("quantumneurofeedback");
    vid.volume = 0.1;
  }
}
