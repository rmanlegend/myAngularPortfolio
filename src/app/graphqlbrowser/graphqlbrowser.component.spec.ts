import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlbrowserComponent } from './graphqlbrowser.component';

describe('GraphqlbrowserComponent', () => {
  let component: GraphqlbrowserComponent;
  let fixture: ComponentFixture<GraphqlbrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlbrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
