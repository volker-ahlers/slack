import { Component, ViewChild } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-electron',
  templateUrl: './electron.component.html',
  styleUrls: ['./electron.component.less']
})
export class ElectronComponent {
  title = 'electron-app';
  sources: { name: string }[] = []
  selectedSource: any;
  videostream: any;
  @ViewChild('videoElement', { static: true }) videoElement: any;
  video: any;

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }


  displaySources() {
    if (this._electronService.isElectronApp) {
       this._electronService.desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {

    //     if (error) throw error;
        this.sources = sources;
        if (this.sources.length > 0) {
          this.selectedSource = this.sources[0];
        }
      });
     }
  }



  selectSource(source: any) {
    this.selectedSource = source;
  }

  takeScreenshot(){

    let nav = <any>navigator;

    nav.webkitGetUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: this.selectedSource.id,
              minWidth: 1280,
              maxWidth: 1280,
              minHeight: 720,
              maxHeight: 720
            }
          }
        }, (stream: any) =>{
          this.video.srcObject = stream;
          this.video.onloadedmetadata = (e: any) => this.video.play()

        }, ()=>{
            console.log('getUserMediaError');
        });
        return;
      
    }
}
