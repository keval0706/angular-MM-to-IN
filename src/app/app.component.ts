import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  lengthInMM: number;
  ansIN: number;
  toIN: number;
  toFT: number;
  
  convertOptions: string;

  lengthInIN: number;
  ansMM: number;

  convertMMToIN() {
    this.toIN = this.lengthInMM * 0.0393701;
    this.toFT = this.toIN/12;
    this.ansIN = (this.toFT - Math.floor(this.toFT))*12;
  }

  convertINToMM() {
    this.toIN = this.lengthInMM * 0.0393701;
    this.toFT = this.toIN/12;
    this.ansIN = (this.toFT - Math.floor(this.toFT))*12;
  }
}
