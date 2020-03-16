import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudmanipulationComponent } from './fraudmanipulation.component';

describe('FraudmanipulationComponent', () => {
  let component: FraudmanipulationComponent;
  let fixture: ComponentFixture<FraudmanipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudmanipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudmanipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
