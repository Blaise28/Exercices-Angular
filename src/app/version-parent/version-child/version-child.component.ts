import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss'],
})
export class VersionChildComponent implements OnChanges{
  @Input() majeur: number = 0;
  @Input() mineur: number = 0;

  changeLog: string[] = [];

  //changes contient les changements sur nos proprietes venant du parent (qui ont le decorateur @Input)
  ngOnChanges(changes: SimpleChanges){
    //on fait notre traitement
    console.log(changes);
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
