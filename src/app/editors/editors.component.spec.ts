import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsModule } from './editors.module';
import { EditorsComponent } from './editors.component';

describe('EditorsComponent', () => {
  let component: EditorsComponent;
  let fixture: ComponentFixture<EditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ EditorsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
