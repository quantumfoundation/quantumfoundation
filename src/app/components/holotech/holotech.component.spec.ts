import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolotechComponent } from './holotech.component';

describe('HolotechComponent', () => {
  let component: HolotechComponent;
  let fixture: ComponentFixture<HolotechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolotechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
