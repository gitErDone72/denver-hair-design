import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairRentalComponent } from './chair-rental.component';

describe('ChairRentalComponent', () => {
  let component: ChairRentalComponent;
  let fixture: ComponentFixture<ChairRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChairRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
