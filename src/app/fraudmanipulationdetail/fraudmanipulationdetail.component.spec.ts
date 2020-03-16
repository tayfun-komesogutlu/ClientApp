import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudmanipulationdetailComponent } from './fraudmanipulationdetail.component';

describe('FraudmanipulationdetailComponent', () => {
  let component: FraudmanipulationdetailComponent;
  let fixture: ComponentFixture<FraudmanipulationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudmanipulationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudmanipulationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
