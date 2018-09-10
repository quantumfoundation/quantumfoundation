import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoinComponent } from './components/coin/coin.component';
import { CoinsComponent } from './components/coins/coins.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { HolotechComponent } from './components/holotech/holotech.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FlagsComponent } from './components/flags/flags.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CoinComponent,
    CoinsComponent,
    YoutubeComponent,
    HolotechComponent,
    FlagsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EmbedVideo.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
