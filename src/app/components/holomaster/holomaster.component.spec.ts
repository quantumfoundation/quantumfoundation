import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolomasterComponent } from './holomaster.component';

describe('HolomasterComponent', () => {
  let component: HolomasterComponent;
  let fixture: ComponentFixture<HolomasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolomasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolomasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
