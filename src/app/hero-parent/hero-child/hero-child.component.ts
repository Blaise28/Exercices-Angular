import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss'],
})
export class HeroChildComponent {
  @Input() heroChild:{name:string}| null = null ;

  @Input("alias") master:string = "";
}
