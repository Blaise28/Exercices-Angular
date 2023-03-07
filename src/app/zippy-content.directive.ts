import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appZippyContent]',
})
export class ZippyContentDirective {
  //on injecte une instance de TemplateRef
  constructor(public templateRef: TemplateRef<unknown>) {}
}
