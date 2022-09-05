import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertErrorPage } from './alert-error.page';

const routes: Routes = [
  {
    path: '',
    component: AlertErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertErrorPageRoutingModule {}
