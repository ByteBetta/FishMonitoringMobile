import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordFishPageRoutingModule } from './record-fish-routing.module';

import { RecordFishPage } from './record-fish.page';
import { SharedModule } from '../components/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecordFishPage
      }
    ])
  ],
  declarations: [RecordFishPage],
  exports: [RecordFishPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecordFishPageModule {}
