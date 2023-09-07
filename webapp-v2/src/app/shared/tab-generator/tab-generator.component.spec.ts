import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGeneratorComponent } from './tab-generator.component';

describe('TabGeneratorComponent', () => {
  let component: TabGeneratorComponent;
  let fixture: ComponentFixture<TabGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabGeneratorComponent]
    });
    fixture = TestBed.createComponent(TabGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
