import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctListComponent } from './proudct-list.component';

describe('ProudctListComponent', () => {
  let component: ProudctListComponent;
  let fixture: ComponentFixture<ProudctListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudctListComponent]
    });
    fixture = TestBed.createComponent(ProudctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
