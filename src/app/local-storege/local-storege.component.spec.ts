import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStoregeComponent } from './local-storege.component';

describe('LocalStoregeComponent', () => {
  let component: LocalStoregeComponent;
  let fixture: ComponentFixture<LocalStoregeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalStoregeComponent]
    });
    fixture = TestBed.createComponent(LocalStoregeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
