import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqldemoComponent } from './graphqldemo.component';

describe('GraphqldemoComponent', () => {
  let component: GraphqldemoComponent;
  let fixture: ComponentFixture<GraphqldemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqldemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
