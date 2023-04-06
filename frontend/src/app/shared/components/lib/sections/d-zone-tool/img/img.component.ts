import {   ZoneParameter, paramiter } from './../../../../../models/d_zoon.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'd-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  outData(a:any) {
 this.parameter[0] =a
  }

  parameter: ZoneParameter[] = [
    {
      img: {
        type: '',
        src: '',
        alt: '',
        height: 100,
        width: 100,
        url: '',
        defaultImg: '',
        srcset: '',
        sizes: '',
        border: '',
        decoding: '',
        ismap: '',
        loading: '',
        usemap: '',
        showForm: false,
      },
    },
  ];

  ngOnInit() {
    this. parameter[0].img.src ? (this. parameter[0].img.url ? (this. parameter[0].img.src = this. parameter[0].img.url) : 0) : 0;
  }
  applyChanges() {
    this. parameter[0].img.src ? (this. parameter[0].img.url ? (this. parameter[0].img.src = this. parameter[0].img.url) : 0) : 0;
    if (this. parameter[0].img.src) this. parameter[0].img.showForm = true;
  }
  Quit() {
    this. parameter[0].img.showForm = false;
  }
}
