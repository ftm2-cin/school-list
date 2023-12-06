import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewSchoolPageRoutingModule } from './view-school-routing.module';
import { ViewSchoolPage } from './view-schoolpage';

describe('ViewSchoolPage', () => {
  let component: ViewSchoolPage;
  let fixture: ComponentFixture<ViewSchoolPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewSchoolPage],
      imports: [IonicModule.forRoot(), ViewSchoolPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
