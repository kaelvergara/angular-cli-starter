import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldOnlyComponent } from './hello-world-only.component';

describe('HelloWorldOnlyComponent', () => {
  let component: HelloWorldOnlyComponent;
  let fixture: ComponentFixture<HelloWorldOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
