import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlaylistComponent } from './info-playlist.component';

describe('InfoPlaylistComponent', () => {
  let component: InfoPlaylistComponent;
  let fixture: ComponentFixture<InfoPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
