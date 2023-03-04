import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements AfterViewInit {
  @ViewChild(TimerComponent)
  private timerComponent!: TimerComponent;
  
  ngAfterViewInit(): void {
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
    setTimeout(()=> (this.disabled = () => this.timerComponent.disbled),0); 
  }
  seconds(): number {
    return 0;
  }
  disabled():string{
    return "";
  }
  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
