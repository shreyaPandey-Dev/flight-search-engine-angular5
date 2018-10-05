import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsPaneComponent } from './contents-pane.component';

describe('ContentsPaneComponent', () => {
  let component: ContentsPaneComponent;
  let fixture: ComponentFixture<ContentsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
