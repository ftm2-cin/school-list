import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSchoolPage } from './view-schoolpage';

const routes: Routes = [
  {
    path: '',
    component: ViewSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSchoolPageRoutingModule {}
