import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFishPage } from './search-fish.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFishPageRoutingModule {}
