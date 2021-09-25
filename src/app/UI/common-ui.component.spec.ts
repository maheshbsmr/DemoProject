import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUIComponent } from './common-ui.component';

describe('CommonUIComponent', () => {
  let component: CommonUIComponent;
  let fixture: ComponentFixture<CommonUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
