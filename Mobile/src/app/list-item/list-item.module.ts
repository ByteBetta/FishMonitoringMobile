import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListItemPageRoutingModule } from './list-item-routing.module';

import { ListItemPage } from './list-item.page';
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
        component: ListItemPage
      }
    ])
  ],
  declarations: [ListItemPage],
  exports: [ListItemPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListItemPageModule {}
