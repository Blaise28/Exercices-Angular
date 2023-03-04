import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnDestroy {
  message = '';
  // une variable qui va stocke l'id de notre interval
  intervalId = 0;
  seconds = 11;
  disbled = '';

  /**
   * il va lance notre compte a rebours
   */
  start() {
    this.countDown();
  }

  /**
   * il va stope notre compte a rebours
   */
  stop() {
    this.clearTimer();
    this.message = `Arret ${this.seconds} seconds`;
  }

  /**
   * il va nettoye notre script
   */
  ngOnDestroy(): void {
    this.clearTimer();
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  /**
   * lance le compte a rebours
   */
  countDown() {
    //A chaque fois qu'on lance un nouveau compte a rebours on efface l'encien
    this.clearTimer();

    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = "C'est la Fin";
        this.disbled = 'disabled';
        this.clearTimer();
      } else {
        this.message = `Reste ${this.seconds} seconds`;
      }
    }, 1000);
  }
}
