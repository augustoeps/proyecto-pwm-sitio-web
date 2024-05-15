import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ServiceDetailPage } from './Service-detail.page';

describe('AnimalDetailPage', () => {
  let component: ServiceDetailPage;
  let fixture: ComponentFixture<ServiceDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
