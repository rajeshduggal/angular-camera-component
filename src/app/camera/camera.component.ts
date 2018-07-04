import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {

  @ViewChild('video') video;
  blur: boolean;
  sepia: boolean;
  invert: boolean;
  flip: boolean;

  constructor() { }

  ngAfterViewInit() {
    const videoElement: HTMLVideoElement = this.video.nativeElement;
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user'}
    }).then(stream => {
      videoElement.srcObject = stream;
    });
  }

  getStyles() {
    let filter = '';
    let transform = '';

    if (this.blur) {
      filter += 'blur(5px)';
    }
    if (this.sepia) {
      filter += 'sepia(50%)';
    }
    if (this.invert) {
      filter += 'invert(1)';
    }
    if (this.flip) {
      transform += 'scaleX(-1)';
    }
    return {
      filter, transform
    }
    if (this.blur) {
      filter += 'blur(5px)';
    }
  }

}
