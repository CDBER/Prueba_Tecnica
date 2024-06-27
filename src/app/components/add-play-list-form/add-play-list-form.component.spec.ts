import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayListFormComponent } from './add-play-list-form.component';

describe('AddPlayListFormComponent', () => {
  let component: AddPlayListFormComponent;
  let fixture: ComponentFixture<AddPlayListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlayListFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlayListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
