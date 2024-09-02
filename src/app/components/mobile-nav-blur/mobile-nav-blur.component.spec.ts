/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobileNavBlur } from './mobile-nav-blur.component';

describe('PageOverlayComponent', () => {
  let component: MobileNavBlur;
  let fixture: ComponentFixture<MobileNavBlur>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavBlur ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavBlur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
