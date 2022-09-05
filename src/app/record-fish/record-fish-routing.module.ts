import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordFishPage } from './record-fish.page';

const routes: Routes = [
  {
    path: '',
    component: RecordFishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordFishPageRoutingModule {}
