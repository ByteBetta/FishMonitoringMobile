import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewGoogleCardsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'googleCards';

  getTitle = (): string => 'Google Cards';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'google-card/0', 'title': 'Styled cards', 'theme': 'layout1' },
      { 'url': 'google-card/1', 'title': 'Styled cards 2', 'theme': 'layout2' },
      { 'url': 'google-card/2', 'title': 'Full image cards', 'theme': 'layout3' },
      { 'url': 'google-card/3', 'title': 'Cards with slider', 'theme': 'layout4' }
    ];
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Styled cards',
      "items": [
        {
          "id": 1,
          "title": "Free Ride",
          "backgroundImage": "assets/imgs/background/0.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
          "id": 2,
          "title": "Mountain Tour",
          "backgroundImage": "assets/imgs/background/1.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
          "id": 3,
          "title": "Sea Tour",
          "backgroundImage": "assets/imgs/background/2.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
          "id": 4,
          "title": "Main Stage Event",
          "backgroundImage": "assets/imgs/background/3.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
          "id": 5,
          "title": "Open Air Concert",
          "backgroundImage": "assets/imgs/background/4.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
          "id": 6,
          "title": "Free Ride Tour",
          "backgroundImage": "assets/imgs/background/5.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
          "id": 7,
          "title": "Free Ride",
          "backgroundImage": "assets/imgs/background/6.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Styled cards 2',
      "items": [
        {
          "id": 1,
          "title": "Green Cactus",
          "subtitle": "Family: Cactaceae",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
          "image": "assets/imgs/background/8.jpg",
          "price": "$14.90",
          "shareIcon": "ellipsis-horizontal"
        },
        {
          "id": 2,
          "title": "Red Cactus",
          "subtitle": "Family: Cactaceae",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
          "image": "assets/imgs/background/10.jpg",
          "price": "$13.99",
          "shareIcon": "ellipsis-horizontal"
        },
        {
          "id": 3,
          "title": "Colors Cactus",
          "subtitle": "Family: Cactaceae",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
          "image": "assets/imgs/background/11.jpg",
          "price": "$35.05",
          "shareIcon": "ellipsis-horizontal"
        },
        {
          "id": 4,
          "title": "Cactus",
          "subtitle": "Family: Cactaceae",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
          "image": "assets/imgs/background/13.jpg",
          "price": "$33.99",
          "shareIcon": "ellipsis-horizontal"
        },
        {
          "id": 5,
          "title": "Big Cactus",
          "subtitle": "Family: Cactaceae",
          "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
          "image": "assets/imgs/background/12.jpg",
          "price": "$10.60",
          "shareIcon": "ellipsis-horizontal"
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Full image cards',
      "items": [
        {
          "id": 1,
          "category": "best offer",
          "image": "assets/imgs/background/2.jpg",
          "title": "Free Ride Tour",
          "subtitle": "West Avenue, NYC",
          "button": "$35.99"
        },
        {
          "id": 2,
          "category": "main event",
          "image": "assets/imgs/background/1.jpg",
          "title": "Open Air Concert",
          "subtitle": "Hyde Park, London",
          "button": "$12.99"
        },
        {
          "id": 3,
          "category": "Best Tourt",
          "image": "assets/imgs/background/0.jpg",
          "title": "Sea ture",
          "subtitle": "Guilin, Kweilin",
          "button": "$13.45"
        },
        {
          "id": 4,
          "category": "Mountain",
          "image": "assets/imgs/background/3.jpg",
          "title": "Mountain Trout",
          "subtitle": "SMountain Trout Camp",
          "button": "$38.60"
        },
        {
          "id": 5,
          "category": "Bridge Tour",
          "image": "assets/imgs/background/4.jpg",
          "title": "Bridge Tour",
          "subtitle": "BridgeClimb, Sydney",
          "button": "$40.85"
        },
        {
          "id": 6,
          "category": "best events",
          "image": "assets/imgs/background/5.jpg",
          "title": "Main Stage Event",
          "subtitle": "Hyde Park, London ",
          "button": "$56.55"
        }
      ]
    };
  }

  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      'toolbarTitle': 'Cards with slider',
      'items': [
        {
          "id": 1,
          "background": "assets/imgs/background/16.jpg",
          "price": "$28.17",
          "buy": "buy",
          "title": "Trendy White Shirt",
          "subtitle": "Free shipping",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/16.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/17.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/16.jpg",
            }
          ],
        },
        {
          "id": 2,
          "background": "assets/imgs/background/17.jpg",
          "price": "$28.17",
          "buy": "buy",
          "title": "Black T-Shirt",
          "subtitle": "Free shipping",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/17.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/16.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/15.jpg",
            },
          ],
        },
        {
          "id": 3,
          "background": "assets/imgs/background/18.jpg",
          "price": "$28.17",
          "buy": "buy",
          "title": "Trendy White Jacket",
          "subtitle": "Free shipping",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/17.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/16.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/15.jpg",
            },
          ],
        },
        {
          "id": 4,
          "background": "assets/imgs/background/19.jpg",
          "price": "$28.17",
          "buy": "buy",
          "title": "Trendy Black Shirt",
          "subtitle": "Free shipping",
          "gallery": [
            {
              "id": 1,
              "image": "assets/imgs/background/16.jpg",
            },
            {
              "id": 2,
              "image": "assets/imgs/background/17.jpg",
            },
            {
              "id": 3,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 4,
              "image": "assets/imgs/background/15.jpg",
            },
            {
              "id": 5,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 6,
              "image": "assets/imgs/background/18.jpg",
            },
            {
              "id": 7,
              "image": "assets/imgs/background/19.jpg",
            },
            {
              "id": 8,
              "image": "assets/imgs/background/15.jpg",
            },
          ],
        }
      ]
    };
  }


  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('listView/googleCards/' + item.theme)
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
