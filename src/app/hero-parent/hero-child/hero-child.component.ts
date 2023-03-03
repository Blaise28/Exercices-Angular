import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss'],
})
export class HeroChildComponent {
  //vue que notre propriete est prive on decore notre getter
  @Input()
  get heroName(): string {
    //on recupere la valeur traite dans notre setter
    return this._heroName;
  }
  set heroName(name: string) {
    //on fait les operations sur la valeur qu'on recoit
    this._heroName = (name && name.trim()) || '< My hide name >';
  }
  private _heroName: string = ""

  @Input('alias') master: string = '';
}
