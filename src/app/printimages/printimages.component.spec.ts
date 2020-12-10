import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintimagesComponent } from './printimages.component';

describe('PrintimagesComponent', () => {
  let component: PrintimagesComponent;
  let fixture: ComponentFixture<PrintimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
