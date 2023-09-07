import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicsComponent } from './alcoholics.component';

describe('AlcoholicsComponent', () => {
  let component: AlcoholicsComponent;
  let fixture: ComponentFixture<AlcoholicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlcoholicsComponent]
    });
    fixture = TestBed.createComponent(AlcoholicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
