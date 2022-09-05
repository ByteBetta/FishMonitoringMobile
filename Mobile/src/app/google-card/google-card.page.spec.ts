import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCardPage } from './google-card.page';

describe('GoogleCardPage', () => {
  let component: GoogleCardPage;
  let fixture: ComponentFixture<GoogleCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
