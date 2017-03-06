import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsModule } from './decorators.module';
import { DecoratorsComponent } from './decorators.component';

describe('DecoratorsComponent', () => {
  let component: DecoratorsComponent;
  let fixture: ComponentFixture<DecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DecoratorsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
