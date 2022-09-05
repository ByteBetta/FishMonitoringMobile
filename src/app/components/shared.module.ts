import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FilterPipe } from './search/FilterPipe';

import { GoogleCardListLayout2Page } from './google-card-list/google-card-list-layout-2/google-card-list-layout-2.page';
import { LoginLayout2Page } from './login-page/login-layout-2/login-layout-2.page';
import { LoginLayout1Page } from './login-page/login-layout-1/login-layout-1.page';
import { AlertLayout2Page } from './alert-dialog/alert-layout-2/alert-layout-2.page';
import { ProfileLayout5Page } from './profila-page/profile-layout-5/profile-layout-5.page';
import { WizardLayout1Page } from './wizard/wizard-layout-1/wizard-layout-1.page';
import { WizardLayout2Page } from './wizard/wizard-layout-2/wizard-layout-2.page';
import { ExpandableListLayout2Page } from './expandable/expandable-list-layout-2/expandable-list-layout-2.page';
import { SearchBarLayout1Page } from './search/search-bar-layout-1/search-bar-layout-1.page';
import { SelectLayout5Page } from './select/select-layout-5/select-layout-5.page';
import { SelectLayout4Page } from './select/select-layout-4/select-layout-4.page';
import { SelectLayout2Page } from './select/select-layout-2/select-layout-2.page';
import { ExpandableListLayout3Page } from './expandable/expandable-list-layout-3/expandable-list-layout-3.page';
import { DragAndDropListLayout1Page } from './drag-and-drop-list/drag-and-drop-list-layout-1/drag-and-drop-list-layout-1.page';
import { ExpandableListLayout1Page } from './expandable/expandable-list-layout-1/expandable-list-layout-1.page';
import { ParallaxLayout2Page } from './parallax/parallax-layout-2/parallax-layout-2.page';
import { SwipeToDismissListLayout1Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-1/swipe-to-dismiss-list-layout-1.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    GoogleCardListLayout2Page,
    LoginLayout2Page,
    LoginLayout1Page,
    AlertLayout2Page,
    ProfileLayout5Page,
    WizardLayout1Page,
    WizardLayout2Page,
    ExpandableListLayout2Page,
    SearchBarLayout1Page,
    FilterPipe,
    SelectLayout5Page,
    SelectLayout4Page,
    SelectLayout2Page,
    ExpandableListLayout3Page,
    DragAndDropListLayout1Page,
    ExpandableListLayout1Page,
    ParallaxLayout2Page,
    SwipeToDismissListLayout1Page
  ],
  exports: [
    GoogleCardListLayout2Page,
    LoginLayout2Page,
    LoginLayout1Page,
    AlertLayout2Page,
    ProfileLayout5Page,
    WizardLayout1Page,
    WizardLayout2Page,
    ExpandableListLayout2Page,
    SearchBarLayout1Page,
    FilterPipe,
    SelectLayout5Page,
    SelectLayout4Page,
    SelectLayout2Page,
    ExpandableListLayout3Page,
    DragAndDropListLayout1Page,
    ExpandableListLayout1Page,
    ParallaxLayout2Page,
    SwipeToDismissListLayout1Page
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
