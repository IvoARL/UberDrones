import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsFormComponent } from './depots-form.component';

describe('DepotsFormComponent', () => {
  let component: DepotsFormComponent;
  let fixture: ComponentFixture<DepotsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
