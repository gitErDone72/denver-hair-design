import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ModalService } from 'src/app/services/modal.service';
import { ModalMapComponent } from '../modal/modal-map/modal-map.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async () => {
    const modalServiceSpy = jasmine.createSpyObj('ModalService', ['open']);

    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [
        { provide: ModalService, useValue: modalServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(ModalService) as jasmine.SpyObj<ModalService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the map modal when openMap is called', () => {
    component.openMap();
    expect(modalService.open).toHaveBeenCalledWith(ModalMapComponent);
  });
});
