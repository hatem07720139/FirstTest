import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdressBookComponent } from './my-adress-book.component';

describe('MyAdressBookComponent', () => {
  let component: MyAdressBookComponent;
  let fixture: ComponentFixture<MyAdressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdressBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
