import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailsComponent } from './asset-details.component';

describe('AssetInfoComponent', () => {
  let component: AssetDetailsComponent;
  let fixture: ComponentFixture<AssetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});