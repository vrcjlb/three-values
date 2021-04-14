import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSocialComponent } from './sign-in-social.component';

describe('SignInSocialComponent', () => {
  let component: SignInSocialComponent;
  let fixture: ComponentFixture<SignInSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
