import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AlertService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'alert';

    getTitle = (): string => 'Alert';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'alert/0', 'title': 'Alert Info', 'theme': 'layout1' },
            { 'url': 'alert/1', 'title': 'Alert Warning', 'theme': 'layout2' },
            { 'url': 'alert/2', 'title': 'Alert Subscribe', 'theme': 'layout3' }
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
            'toolbarTitle': 'Alert Info',
            "items": [
                {
                  "id": 1,
                  "image": "assets/imgs/background/0.jpg",
                  "title": "Skateboarding",
                  "subtitle": "6.3 km from centre",
                  "price": "$54,78",
                  "review": "355 reviews",
                  "rating": "Excellent",
                  "iconsStars": [
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star-outline",
                      }
                  ],
                },
                {
                  "id": 2,
                  "image": "assets/imgs/background/2.jpg",
                  "title": "Superbank",
                  "subtitle": "8.3 km from centre",
                  "price": "$9,53",
                  "review": "135 reviews",
                  "rating": "Excellent",
                  "iconsStars": [
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star-outline",
                      }
                  ],
                },
                {
                  "id": 3,
                  "image": "assets/imgs/background/3.jpg",
                  "title": "Ducati Panigale",
                  "subtitle": "16.1 km from centre",
                  "price": "$23,73",
                  "review": "348 reviews",
                  "rating": "Excellent",
                  "iconsStars": [
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star-outline",
                      }
                  ],
                },
                {
                  "id": 4,
                  "image": "assets/imgs/background/4.jpg",
                  "title": "Perfect Snow",
                  "subtitle": "6.6 km from centre",
                  "price": "$18,73",
                  "review": "532 reviews",
                  "rating": "Excellent",
                  "iconsStars": [
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star-outline",
                      }
                  ],
                },
                {
                  "id": 4,
                  "image": "assets/imgs/background/6.jpg",
                  "title": "Concert Tours",
                  "subtitle": "1.7 km from centre",
                  "price": "$8,73",
                  "review": "345 reviews",
                  "rating": "Excellent",
                  "iconsStars": [
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star",
                      },
                      {
                          "iconStar": "star-outline",
                      }
                  ],
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Alert Warning',
            "items": [
                {
                    "id": 1,
                    "category": "best offer",
                    "image": "assets/imgs/background/14.jpg",
                    "title": "New Floral Printing Slim Turndown Neck ",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 2,
                    "category": "best offer",
                    "image": "assets/imgs/background/15.jpg",
                    "title": "Lapel Patchwork Long Sleeve Shirt",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 3,
                    "category": "best offer",
                    "image": "assets/imgs/background/16.jpg",
                    "title": "Tidebuy Unique Floral Mens Casual Shirt",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 4,
                    "category": "best offer",
                    "image": "assets/imgs/background/17.jpg",
                    "title": "Plain Lapel Single Breasted Mens Shirt",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 5,
                    "category": "best offer",
                    "image": "assets/imgs/background/18.jpg",
                    "title": "Oblique Single Breasted Mens Slim Shirt",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 6,
                    "category": "best offe",
                    "image": "assets/imgs/background/19.jpg",
                    "title": "Embroidery Lapel Straight Mens Shirt",
                    "iconLike": "heart",
                    "iconComment": "chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Alert Subscribe',
            'items': [
                {
                    'id': 1,
                    'image': 'assets/imgs/background/19.jpg',
                    'title': 'T Shirt Dresses',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                {
                    'id': 2,
                    'image': 'assets/imgs/background/18.jpg',
                    'title': 'Dress with Pockets',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                {
                    'id': 3,
                    'image': 'assets/imgs/background/17.jpg',
                    'title': 'Sleeve Swing Dress',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                {
                    'id': 4,
                    'image': 'assets/imgs/background/16.jpg',
                    'title': 'Pleated Sun Dresses',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                {
                    'id': 5,
                    'image': 'assets/imgs/background/15.jpg',
                    'title': 'Long Sleeve V-Neck',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
                },
                {
                    'id': 6,
                    'image': 'assets/imgs/background/14.jpg',
                    'title': 'Long Sleeve V-Neck',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
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
                    .object('alert/' + item.theme)
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
