import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsmComponent } from './productsm.component';

describe('ProductsmComponent', () => {
  let component: ProductsmComponent;
  let fixture: ComponentFixture<ProductsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
