import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoinComponent } from './components/coin/coin.component';
import { CoinsComponent } from './components/coins/coins.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { HolotechComponent } from './components/holotech/holotech.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinComponent,
    CoinsComponent,
    YoutubeComponent,
    HolotechComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
