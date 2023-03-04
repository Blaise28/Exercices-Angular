import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.scss']
})
export class VersionParentComponent {
  majeur = 1;
  mineur = 23;
  test_change = 3;

  newMineur(){
    this.mineur++;
  }
  newMajeur(){
    this.majeur++;
    this.mineur = 0;
  }
}
