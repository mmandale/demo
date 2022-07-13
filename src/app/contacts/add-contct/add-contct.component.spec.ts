import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContctComponent } from './add-contct.component';

describe('AddContctComponent', () => {
  let component: AddContctComponent;
  let fixture: ComponentFixture<AddContctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
