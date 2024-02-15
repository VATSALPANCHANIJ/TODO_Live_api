import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecticeCurdComponent } from './prectice-curd.component';

describe('PrecticeCurdComponent', () => {
  let component: PrecticeCurdComponent;
  let fixture: ComponentFixture<PrecticeCurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecticeCurdComponent]
    });
    fixture = TestBed.createComponent(PrecticeCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
