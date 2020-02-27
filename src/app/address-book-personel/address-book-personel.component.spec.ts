import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookPersonelComponent } from './address-book-personel.component';

describe('AddressBookPersonelComponent', () => {
  let component: AddressBookPersonelComponent;
  let fixture: ComponentFixture<AddressBookPersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookPersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
