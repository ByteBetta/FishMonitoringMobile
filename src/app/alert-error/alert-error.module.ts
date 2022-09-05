import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertErrorPageRoutingModule } from './alert-error-routing.module';

import { AlertErrorPage } from './alert-error.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../components/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
                {
                  path: '',
                  component: AlertErrorPage
                }
              ])
    ],
  declarations: [AlertErrorPage],
  exports: [AlertErrorPage],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertErrorPageModule {}
