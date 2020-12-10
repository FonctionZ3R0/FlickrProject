import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesearchComponent } from './imagesearch.component';

describe('ImagesearchComponent', () => {
  let component: ImagesearchComponent;
  let fixture: ComponentFixture<ImagesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
