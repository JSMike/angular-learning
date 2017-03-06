import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldingModule } from './scaffolding.module';
import { ScaffoldingComponent } from './scaffolding.component';

describe('ScaffoldingComponent', () => {
  let component: ScaffoldingComponent;
  let fixture: ComponentFixture<ScaffoldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ScaffoldingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
