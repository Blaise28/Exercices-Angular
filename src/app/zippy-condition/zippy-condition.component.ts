import { Component, ContentChild } from '@angular/core';
import { ZippyContentDirective } from '../zippy-content.directive';

@Component({
  selector: 'app-zippy-condition',
  templateUrl: './zippy-condition.component.html',
  styleUrls: ['./zippy-condition.component.scss'],
})
export class ZippyConditionComponent {
  @ContentChild(ZippyContentDirective)
  content!: ZippyContentDirective;

  expanded = true;
  name = "nightbird";
  contentId= "containerWithCondition"
}
