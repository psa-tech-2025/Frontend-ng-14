import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiolougeComponent } from './diolouge.component';

describe('DiolougeComponent', () => {
  let component: DiolougeComponent;
  let fixture: ComponentFixture<DiolougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiolougeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiolougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
