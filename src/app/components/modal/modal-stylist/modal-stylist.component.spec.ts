import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStylistComponent } from './modal-stylist.component';

describe('ModalStylistComponent', () => {
  let component: ModalStylistComponent;
  let fixture: ComponentFixture<ModalStylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalStylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
