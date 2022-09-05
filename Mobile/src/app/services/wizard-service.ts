import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class WizardService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getTitle = (): string => 'Wizard';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'wizard/0', 'title': 'Simple + icon', 'theme': 'layout1' },
      { 'url': 'wizard/1', 'title': 'Big image', 'theme': 'layout2' },
      { 'url': 'wizard/2', 'title': 'Big Image + Text', 'theme': 'layout3' },
      { 'url': 'wizard/3', 'title': 'Article with Text', 'theme': 'layout4' }
    ];
  }

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Simple + icon',
      "btnPrev": "Previous",
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "logo": "assets/imgs/logo/2.png",
          "title": "Welcome to our new iOS style theme",
          "description": "Finished layouts and components for Ionic. Ready to use!"
        },
        {
          "logo": "assets/imgs/logo/2.png",
          "title": "For Developers",
          "description": "Save hours of developing. Tons of funcional components."
        },
        {
          "logo": "assets/imgs/logo/2.png",
          "title": "For Designers",
          "description": "Endless possibilities. Combine layouts as you wish."
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Big image',
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "welcome": "Welcome",
          "backgroundImage": "assets/imgs/background/9.jpg",
          "title": "Welcome to our new iOS theme",
          "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          "welcome": "Welcome",
          "backgroundImage": "assets/imgs/background/8.jpg",
          "title": "Welcome to our new iOS theme",
          "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          "welcome": "Welcome",
          "backgroundImage": "assets/imgs/background/10.jpg",
          "title": "Welcome to our new iOS theme",
          "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Big Image + Text',
      "btnNext": "Next",
      "btnFinish": "Finish",
      "items": [
        {
          "backgroundImage": "assets/imgs/background/21.jpg",
          "subtitle": "Page 1",
          "title": "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          "backgroundImage": "assets/imgs/background/22.jpg",
          "subtitle": "Page 2",
          "title": "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          "backgroundImage": "assets/imgs/background/23.jpg",
          "subtitle": "Page 3",
          "title": "Lorem ipsum dolor sit amet, consectetur"
        }
      ]
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'Article with Text',
      'items': [
        {
          'backgroundImage': 'assets/imgs/background/16.jpg',
        },
        {
          'backgroundImage': 'assets/imgs/background/17.jpg',
        },
        {
          'backgroundImage': 'assets/imgs/background/18.jpg',
        }
      ],
      "title": "The generated Lorem Ipsum is therefore always free from repetition, injected humour",
      "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "image": "assets/imgs/background/6.jpg",
      "description2": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('wizard/' + item.theme)
          .valueChanges()
          .subscribe(snapshot => {
            this.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            this.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        this.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
