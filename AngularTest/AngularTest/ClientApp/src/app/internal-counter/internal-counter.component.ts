import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'internal-counter-component',
  templateUrl: './internal-counter.component.html'
})
export class InternalCounterComponent {
  public currentCount = 0;

  @Input() name: String;
  @Input() globalCount: Number;

  @Output() setglobal: EventEmitter<number> = new EventEmitter<number>();

  public incrementCounter() {
    this.currentCount++;
  }

  public setGlobalCounter() {
    this.setglobal.emit(this.currentCount);
  }
}
