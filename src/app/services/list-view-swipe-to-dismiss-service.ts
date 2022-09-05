import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewSwipeToDismissService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'swipeToDismiss';

  getTitle = (): string => 'Swipe to dismiss';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'swipe-to-dismiss/0', 'title': 'Small item + header', 'theme': 'layout1' },
      { 'url': 'swipe-to-dismiss/1', 'title': 'Products + CTA', 'theme': 'layout2' },
      { 'url': 'swipe-to-dismiss/2', 'title': 'Full with image + left swipe', 'theme': 'layout3' }
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
      'headerTitle': 'Small item + header',
      "header": "Inbox",
      "title": "12 new mesages",
      "subtitle": "Mark all messages as read.",
      "button": "ok",
      "items": [
        {
          "id": 1,
          "title": "Grant Marshall",
          "subtitle": "Subtitle",
          "textIcon": "6min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 2,
          "title": "Pena Valdez",
          "subtitle": "Subtitle",
          "textIcon": "58min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 3,
          "title": "Jessica Miles",
          "subtitle": "Subtitle",
          "textIcon": "92min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 4,
          "title": "Kerri Barber",
          "subtitle": "Subtitle",
          "textIcon": "93min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 5,
          "title": "Natasha Gamble",
          "subtitle": "Subtitle",
          "textIcon": "43min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 6,
          "title": "White Castaneda",
          "subtitle": "Subtitle",
          "textIcon": "62min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 7,
          "title": "Vanessa Ryan",
          "subtitle": "Subtitle",
          "textIcon": "81min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        },
        {
          "id": 8,
          "title": "Meredith Hendricks",
          "subtitle": "Subtitle",
          "textIcon": "51min ago",
          "icon": "information-circle-outline",
          "delate": "Delete",
          "reply": "Reply"
        }
      ]
    };
  }


  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'headerTitle': 'Products + CTA',
      "header": "Following",
      "items": [
        {
          "id": 1,
          "title": "Grant Marshall",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/17.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 2,
          "title": "Pena Valdez",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/18.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 3,
          "title": "Jessica Miles",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/19.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 4,
          "title": "Kerri Barber",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/20.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 5,
          "title": "Natasha Gamble",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/21.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 6,
          "title": "White Castaneda",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/22.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 7,
          "title": "Vanessa Ryan",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/11.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 8,
          "title": "Carol Kelly",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/17.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        },
        {
          "id": 9,
          "title": "Barrera Ramsey",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur",
          "image": "assets/imgs/avatar/18.jpg",
          "ionBadge": "follow",
          "delate": "Delete"
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'headerTitle': 'Full with image + left swipe',
      "items": [
        {
          "id": 1,
          "title": "Free Ride",
          "subtitle": "Monday, 15th Oct. 2017",
          "image": "assets/imgs/background/4.jpg",
          "delate": "Delete"
        },
        {
          "id": 2,
          "title": "Main Stage Event",
          "subtitle": "Thursday, 20th Feb. 2017",
          "image": "assets/imgs/background/0.jpg",
          "delate": "Delete"
        },
        {
          "id": 3,
          "title": "Mountain Tour",
          "subtitle": "Friday, 10th Aug. 2017",
          "image": "assets/imgs/background/3.jpg",
          "delate": "Delete"
        },
        {
          "id": 4,
          "title": "Sea Tour",
          "subtitle": "Wednesday, 17th May 2016",
          "image": "assets/imgs/background/5.jpg",
          "delate": "Delete"
        },
        {
          "id": 5,
          "title": "Open Air Concert",
          "subtitle": "Sunday, 11th June 2017",
          "image": "assets/imgs/background/6.jpg",
          "delate": "Delete"
        },
        {
          "id": 6,
          "title": "Bridge Tour",
          "subtitle": "Friday, 10th Jan. 2017",
          "image": "assets/imgs/background/1.jpg",
          "delate": "Delete"
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
          .object('listView/swipeToDismiss/' + item.theme)
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
