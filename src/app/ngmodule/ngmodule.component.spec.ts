import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmoduleModule } from './ngmodule.module';
import { NgmoduleComponent } from './ngmodule.component';

describe('NgmoduleComponent', () => {
  let component: NgmoduleComponent;
  let fixture: ComponentFixture<NgmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgmoduleModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
