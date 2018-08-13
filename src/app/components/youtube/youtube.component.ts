import { Component, Input } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {

  iframe_html: any;
  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
 
  constructor(
    private embedService: EmbedVideoService
  ) {
    this.iframe_html = this.embedService.embed(this.youtubeUrl);
  }


}
