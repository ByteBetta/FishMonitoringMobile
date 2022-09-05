import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../components/shared.module';
import { IonicModule } from '@ionic/angular';

import { GoogleCardPage } from './google-card.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GoogleCardPage]
})
export class GoogleCardPageModule {}
