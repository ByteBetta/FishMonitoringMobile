import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ActionSheetService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'actionSheet';

  getTitle = (): string => 'Action Sheet';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'action-sheet/0', 'title': 'Basic', 'theme': 'layout1' },
      { 'url': 'action-sheet/1', 'title': 'News', 'theme': 'layout2' },
      { 'url': 'action-sheet/2', 'title': 'With Text Header', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Basic',
      "headerImage": "assets/imgs/background/17.jpg",
      "shareIcon": "ellipsis-horizontal",
      "actionSheet": {
        "buttons": [
          {
            "text": "Mark as read",
            "role": "destructive"
          },
          {
            "text": "Follow author"
          },
          {
            "text": "Read more info"
          },
          {
            "text": "More from category"
          },
          {
            "text": "Cancel",
            "role": "cancel"
          }
        ]
      },
      "items": [
        {
          "id": 1,
          "title": "Super & Black",
          "subtitle": "Available Now",
          "category": "NEW OFFER",
          "button": "$63.99",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "productDescriptions": [
            {
              "id": 1,
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              "id": 2,
              "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "id": 3,
              "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
            },
            {
              "id": 4,
              "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
            }
          ]
        }
      ]
    }
  };

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'News',
      "headerImage": "assets/imgs/background-small/3.jpg",
      "title": "Infinit bridge made in China.",
      "subtitle": "by Name Surname",
      "category": "ENGINEERING",
      "avatar": "assets/imgs/avatar/3.jpg",
      "shareIcon": "ellipsis-horizontal",
      "actionSheet": {
        "buttons": [
          {
            "text": "Add to Cart",
            "role": "destructive"
          },
          {
            "text": "Add to Favorites"
          },
          {
            "text": "Read more info"
          },
          {
            "text": "Delete Item"
          },
          {
            "text": "Cancel",
            "role": "cancel"
          }
        ]
      },
      "items": [
        {
          "id": 1,
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          "id": 2,
          "title": "Lorem ipsum dolor sit amet",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          "id": 3,
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
        },
        {
          "id": 4,
          "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
      ]
    };
  };

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'With Text Header',
      "shareIcon": "ellipsis-horizontal",
      "actionSheet": {
        "title": "Choose what to do with this card?",
        "buttons": [
          {
            "text": "Read more",
            "role": "destructive"
          },
          {
            "text": "Add to Favorites"
          },
          {
            "text": "Delete Card"
          },
          {
            "text": "Disable Card"
          },
          {
            "text": "Cancel",
            "role": "cancel"
          }
        ]
      },
      "items": [
        {
          "id": 1,
          "category": "best offer",
          "image": "assets/imgs/background/2.jpg",
          "title": "Free Ride Tour",
          "subtitle": "West Avenue, NYC",
        },
        {
          "id": 2,
          "category": "main event",
          "image": "assets/imgs/background/1.jpg",
          "title": "Open Air Concert",
          "subtitle": "Hyde Park, London",
        },
        {
          "id": 3,
          "category": "Best Tourt",
          "image": "assets/imgs/background/0.jpg",
          "title": "Sea ture",
          "subtitle": "Guilin, Kweilin",
        },
        {
          "id": 4,
          "category": "Mountain",
          "image": "assets/imgs/background/3.jpg",
          "title": "Mountain Trout",
          "subtitle": "SMountain Trout Camp",
        },
        {
          "id": 5,
          "category": "Bridge Tour",
          "image": "assets/imgs/background/4.jpg",
          "title": "Bridge Tour",
          "subtitle": "BridgeClimb, Sydney",
        },
        {
          "id": 6,
          "category": "best events",
          "image": "assets/imgs/background/5.jpg",
          "title": "Main Stage Event",
          "subtitle": "Hyde Park, London ",
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('actionSheet/' + item.theme)
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
