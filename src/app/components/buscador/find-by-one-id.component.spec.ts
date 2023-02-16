import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByOneIdComponent } from './find-by-one-id.component';

describe('FindByOneIdComponent', () => {
  let component: FindByOneIdComponent;
  let fixture: ComponentFixture<FindByOneIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByOneIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByOneIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
