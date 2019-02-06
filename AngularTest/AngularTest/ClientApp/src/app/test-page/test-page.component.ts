import { Component } from '@angular/core';

@Component({
  selector: 'test-page-component',
  templateUrl: './test-page.component.html'
})
export class TestPageComponent {
  public currentCount = 0;

  public name1 = "Counter 1";
  public name2 = "Counter 2";

  public incrementCounter() {
    this.currentCount++;
  }

  public reset(val) {
    this.currentCount = val;
  }
}
