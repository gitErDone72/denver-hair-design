import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNavComponent } from './main-nav.component';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from 'src/app/testing/activated-route.mock';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: MockActivatedRoute }],
      imports: [MainNavComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle expanded state and emit event when not beyond mobile width', () => {
    component.isBeyondMobileWidth = false;
    component.expanded = true;
    spyOn(component.expandedChange, 'emit');

    component.toggleExpanded();

    expect(component.expanded).toBeFalse();
    expect(component.expandedChange.emit).toHaveBeenCalledWith(false);
  });

  it('should not toggle expanded state or emit event when beyond mobile width', () => {
    component.isBeyondMobileWidth = true;
    component.expanded = true;
    spyOn(component.expandedChange, 'emit');

    component.toggleExpanded();

    expect(component.expanded).toBeTrue();
    expect(component.expandedChange.emit).not.toHaveBeenCalled();
  });
});
