import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapComponent } from './gsap-component';

describe('GsapComponent', () => {
  let component: GsapComponent;
  let fixture: ComponentFixture<GsapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
