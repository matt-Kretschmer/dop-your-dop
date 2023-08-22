import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsupComponent } from './bottomsup.component';

describe('BottomsupComponent', () => {
  let component: BottomsupComponent;
  let fixture: ComponentFixture<BottomsupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
