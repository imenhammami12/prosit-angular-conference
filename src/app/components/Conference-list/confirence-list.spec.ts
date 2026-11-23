import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirenceList } from './conference-list';

describe('ConfirenceList', () => {
  let component: ConfirenceList;
  let fixture: ComponentFixture<ConfirenceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirenceList],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirenceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
