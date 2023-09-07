import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoaderComponent } from './dynamic-loader.component';

describe('DynamicLoaderComponent', () => {
  let component: DynamicLoaderComponent;
  let fixture: ComponentFixture<DynamicLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicLoaderComponent]
    });
    fixture = TestBed.createComponent(DynamicLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
