import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
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
                  component: WelcomePage
                }
              ])
            ],
            declarations: [WelcomePage],
            exports: [WelcomePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
export class WelcomePageModule {}
