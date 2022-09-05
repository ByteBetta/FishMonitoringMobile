import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SearchBarService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Search bars';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'search-bars/0', 'title': 'Simple', 'theme': 'layout1' },
      { 'url': 'search-bars/1', 'title': 'Field + header', 'theme': 'layout2' },
      { 'url': 'search-bars/2', 'title': 'Field + header 2', 'theme': 'layout3' }
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
      'toolbarTitle': 'Simple',
      "items": [
        {
          "title": "friends",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/1.jpg"
        },
        {
          "title": "enemies",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/2.jpg"
        },
        {
          "title": "neutral",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/3.jpg"
        },
        {
          "title": "family",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/4.jpg"
        },
        {
          "title": "guests",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/5.jpg"
        },
        {
          "title": "students",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/6.jpg"
        },
        {
          "title": "friends",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/7.jpg"
        },
        {
          "title": "enemies",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/8.jpg"
        },
        {
          "title": "neutral",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/imgs/background/9.jpg"
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Field + header',
      "title": "Just type",
      "headerImage": "assets/imgs/background/1.jpg",
      "items": [
        {
          "title": "Grant Marshall",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/1.jpg",
          "button": "GET"
        },
        {
          "title": "Pena Valdez",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/2.jpg",
          "button": "GET"
        },
        {
          "title": "Jessica Miles",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/3.jpg",
          "button": "GET"
        },
        {
          "title": "Kerri Barber",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/4.jpg",
          "button": "GET"
        },
        {
          "title": "Natasha Gamble",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/5.jpg",
          "button": "GET"
        },
        {
          "title": "White Castaneda",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/6.jpg",
          "button": "GET"
        },
        {
          "title": "Vanessa Ryan",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/7.jpg",
          "button": "GET"
        },
        {
          "title": "Meredith Hendricks",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/8.jpg",
          "button": "GET"
        },
        {
          "title": "Carol Kelly",
          "subtitle": "Lorem Ipsum is simply dummy text of the printing",
          "avatar": "assets/imgs/avatar/9.jpg",
          "button": "GET"
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Field + header 2',
      "title": "Search Friends",
      "items": [
        {
          "id": 1,
          "title": "Barrera Ramsey",
          "subtitle": "@barrera",
          "detail": "Brogan",
          "avatar": "assets/imgs/avatar/1.jpg"
        },
        {
          "id": 2,
          "title": "Julia Petersen",
          "subtitle": "@petersen3",
          "detail": "Rehrersburg",
          "avatar": "assets/imgs/avatar/2.jpg"
        },
        {
          "id": 3,
          "title": "Holman Valencia",
          "subtitle": "@valencia14",
          "detail": "Durham",
          "avatar": "assets/imgs/avatar/3.jpg"
        },
        {
          "id": 4,
          "title": "Marisa Cain",
          "subtitle": "@marisacain",
          "detail": "Callaghan",
          "avatar": "assets/imgs/avatar/4.jpg"
        },
        {
          "id": 5,
          "title": "Dejesus Norris",
          "subtitle": "@dejesusno",
          "detail": "Manitou",
          "avatar": "assets/imgs/avatar/5.jpg"
        },
        {
          "id": 6,
          "title": "Gayle Gaines",
          "subtitle": "@gaylega",
          "detail": "Weedville",
          "avatar": "assets/imgs/avatar/6.jpg"
        },
        {
          "id": 7,
          "title": "Prince Phelps",
          "subtitle": "@prince45",
          "detail": "Curtice",
          "avatar": "assets/imgs/avatar/7.jpg"
        },
        {
          "id": 8,
          "title": "Keri Hudson",
          "subtitle": "@keri444",
          "detail": "Barronett",
          "avatar": "assets/imgs/avatar/8.jpg"
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('searchBars/' + item.theme)
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
