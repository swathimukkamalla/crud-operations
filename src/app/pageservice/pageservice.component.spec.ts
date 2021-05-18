import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageserviceComponent } from './pageservice.component';

describe('PageserviceComponent', () => {
  let component: PageserviceComponent;
  let fixture: ComponentFixture<PageserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
