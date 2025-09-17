import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocation } from './housing-location';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
