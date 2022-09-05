import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFishPageRoutingModule } from './search-fish-routing.module';

import { SearchFishPage } from './search-fish.page';
import { SharedModule } from '../components/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchFishPage
      }
    ])
  ],
  declarations: [SearchFishPage],
  exports: [SearchFishPage  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchFishPageModule {}
