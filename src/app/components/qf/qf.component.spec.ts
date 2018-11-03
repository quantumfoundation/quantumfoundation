import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfComponent } from './qf.component';

describe('QfComponent', () => {
  let component: QfComponent;
  let fixture: ComponentFixture<QfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
