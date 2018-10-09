import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePicerComponent } from './date-picer.component';

describe('DatePicerComponent', () => {
  let component: DatePicerComponent;
  let fixture: ComponentFixture<DatePicerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePicerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
