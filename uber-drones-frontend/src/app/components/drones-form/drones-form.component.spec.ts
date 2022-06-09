import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesFormComponent } from './drones-form.component';

describe('DronesFormComponent', () => {
  let component: DronesFormComponent;
  let fixture: ComponentFixture<DronesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DronesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
