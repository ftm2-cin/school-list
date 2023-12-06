import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewSchoolPage } from './view-schoolpage';

import { IonicModule } from '@ionic/angular';

import { ViewSchoolPageRoutingModule } from './view-school-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSchoolPageRoutingModule
  ],
  declarations: [ViewSchoolPage]
})
export class ViewMessagePageModule {}
