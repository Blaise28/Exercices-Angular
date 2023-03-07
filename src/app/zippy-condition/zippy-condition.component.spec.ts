import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyConditionComponent } from './zippy-condition.component';

describe('ZippyConditionComponent', () => {
  let component: ZippyConditionComponent;
  let fixture: ComponentFixture<ZippyConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZippyConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
