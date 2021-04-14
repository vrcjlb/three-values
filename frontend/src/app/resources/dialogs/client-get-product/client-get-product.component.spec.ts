import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGetProductComponent } from './client-get-product.component';

describe('ClientGetProductComponent', () => {
  let component: ClientGetProductComponent;
  let fixture: ComponentFixture<ClientGetProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGetProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
