import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crawler Front';
  result: number;
  resultStr: object;
  resultSpread: number[] = [];
  arrayNumber1: number[] = [1, 2, 3];
  arrayNumber2: number[] = [4, 5, 6, 7, 8];
  arrayNumber3: number[] = [200, 201];

  constructor(){
    this.result = this.addition(2, 3, 8, 9, 123, 45, 4, 6);
    // this.resultSpread = this.resultSpread.concat(this.arrayNumber1, this.arrayNumber2);
    // this.resultSpread = ...this.arrayNumber1;
    // this.resultSpread = [...this.arrayNumber1, ...this.arrayNumber3, ...this.arrayNumber2];

    // this.resultStr = this.createObjectNimporteQuoi();
    // console.log("this.resultStr", this.resultStr);

    // const [attribute1] = this.createObjectNimporteQuoi();
    // console.log("attribute1:", attribute1);
  }

  addition(...b: number[]): number{
    let result = 0;
    b.forEach((bItem: number) => result += bItem);
    return result;
  }

  createObjectNimporteQuoi(){
    return [
      "attribute1Value1",
      "attribute1Value2",
      "attribute1Value3",
    ];
  }
}
