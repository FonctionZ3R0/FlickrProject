import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchpageComponent } from './switchpage.component';

describe('SwitchpageComponent', () => {
  let component: SwitchpageComponent;
  let fixture: ComponentFixture<SwitchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
