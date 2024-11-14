import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingButtonComponent } from './booking-button.component';

describe('BookingButtonComponent', () => {
  let component: BookingButtonComponent;
  let fixture: ComponentFixture<BookingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
