import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewExpandableService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'expandable';

  getTitle = (): string => 'Expandable';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'expandable/0', 'title': 'List big image', 'theme': 'layout1' },
      { 'url': 'expandable/1', 'title': 'Full image with CTA', 'theme': 'layout2' },
      { 'url': 'expandable/2', 'title': 'Filters products', 'theme': 'layout3' }
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
      'toolbarTitle': 'List big image',
      "header": "Friends",
      "items": [
        {
          "id": 1,
          "title": "Harriette Velandia",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "image": "assets/imgs/avatar/15.jpg",
          "items": [
            {
              "id": 1,
              "title": "Jessica Miles",
              "description": "NYC",
              "image": "assets/imgs/avatar/10.jpg",
              "details": "3 miles"
            },
            {
              "id": 2,
              "title": "Pena Valdez",
              "description": "Rehrersburg",
              "image": "assets/imgs/avatar/11.jpg",
              "details": "3.1 miles"
            },
            {
              "id": 3,
              "title": "Jessica Miles",
              "description": "Brogan",
              "image": "assets/imgs/avatar/12.jpg",
              "details": "3.2 miles"
            },
            {
              "id": 4,
              "title": "Meredith Hendricks",
              "description": "Callaghan",
              "image": "assets/imgs/avatar/13.jpg",
              "details": "2.5 miles"
            }
          ]
        },
        {
          "id": 2,
          "title": "Margie Kasten",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "image": "assets/imgs/avatar/2.jpg",
          "items": [
            {
              "id": 1,
              "title": "Carol Kelly",
              "description": "Blackgum",
              "image": "assets/imgs/avatar/14.jpg",
              "details": "2.1 miles"
            },
            {
              "id": 2,
              "title": "Barrera Ramsey",
              "description": "Williston",
              "image": "assets/imgs/avatar/15.jpg",
              "details": "2.6 miles"
            },
            {
              "id": 3,
              "title": "Julia Petersen",
              "description": "Norvelt",
              "image": "assets/imgs/avatar/14.jpg",
              "details": "2.8 miles"
            },
            {
              "id": 4,
              "title": "Holman Valencia",
              "description": "Keller",
              "image": "assets/imgs/avatar/13.jpg",
              "details": "3.0 miles"
            }
          ]
        },
        {
          "id": 3,
          "title": "Faythe Pitts",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "image": "assets/imgs/avatar/3.jpg",
          "items": [
            {
              "id": 1,
              "title": "Marisa Cain",
              "description": "Maxville",
              "image": "assets/imgs/avatar/11.jpg",
              "details": "1.0 miles"
            },
            {
              "id": 2,
              "title": "Dejesus Norris",
              "description": "Bannock",
              "image": "assets/imgs/avatar/12.jpg",
              "details": "1.1 miles"
            },
            {
              "id": 3,
              "title": "Lara Lynn",
              "description": "Singer",
              "image": "assets/imgs/avatar/13.jpg",
              "details": "2.0 miles"
            },
            {
              "id": 4,
              "title": "Burns Marks",
              "description": "Nutrioso",
              "image": "assets/imgs/avatar/14.jpg",
              "details": "3.0 miles"
            }
          ]
        },
        {
          "id": 4,
          "title": "Doloritas Parent",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "image": "assets/imgs/avatar/4.jpg",
          "items": [
            {
              "id": 1,
              "title": "Byrd Hewitt",
              "description": "Bluetown",
              "image": "assets/imgs/avatar/0.jpg",
              "details": "1.1 miles"
            },
            {
              "id": 2,
              "title": "Guerrero Woodard",
              "description": "Fairhaven",
              "image": "assets/imgs/avatar/1.jpg",
              "details": "3.2 miles"
            },
            {
              "id": 3,
              "title": "Solis Mullen",
              "description": "Caledonia",
              "image": "assets/imgs/avatar/2.jpg",
              "details": "2.3 miles"
            },
            {
              "id": 4,
              "title": "Guy Mccoy",
              "description": "Strykersville",
              "image": "assets/imgs/avatar/3.jpg",
              "details": "1.4 miles"
            }
          ]
        },
        {
          "id": 5,
          "title": "Opal Shaham",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "image": "assets/imgs/avatar/5.jpg",
          "items": [
            {
              "id": 1,
              "title": "Cline Lindsay",
              "description": "Caspar",
              "image": "assets/imgs/avatar/14.jpg",
              "details": "2.0 miles"
            },
            {
              "id": 2,
              "title": "Juliette Medina",
              "description": "Blue",
              "image": "assets/imgs/avatar/15.jpg",
              "details": "1.0 miles"
            },
            {
              "id": 3,
              "title": "Mildred Clark",
              "description": "Vincent",
              "image": "assets/imgs/avatar/6.jpg",
              "details": "4.0 miles"
            },
            {
              "id": 4,
              "title": "Valdez Bruce",
              "description": "Hollins",
              "image": "assets/imgs/avatar/7.jpg",
              "details": "5.0 miles"
            }
          ]
        },
        {
          "id": 6,
          "title": "Pandora Hart",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          "image": "assets/imgs/avatar/18.jpg",
          "items": [
            {
              "id": 1,
              "title": "Wilkerson Hardin",
              "description": "Evergreen",
              "image": "assets/imgs/avatar/14.jpg",
              "details": "2.0 miles"
            },
            {
              "id": 2,
              "title": "Daisy Mcintyre",
              "description": "Greenwich",
              "image": "assets/imgs/avatar/15.jpg",
              "details": "2.1 miles"
            },
            {
              "id": 3,
              "title": "Savage Mayer",
              "description": "Summerset",
              "image": "assets/imgs/avatar/6.jpg",
              "details": "2.9 miles"
            },
            {
              "id": 4,
              "title": "Mann Cox",
              "description": "Marne",
              "image": "assets/imgs/avatar/7.jpg",
              "details": "3.0 miles"
            }
          ]
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Full Image With Cta',
      "items": [
        {
          "id": 1,
          "title": "Main Stage Event",
          "subtitle": "Monday, 15th Oct. 2017",
          "backgroundImage": "assets/imgs/background/1.jpg",
          "icon": "chevron-forward-circle-outline",
          "iconText": "Read more",
          "items": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
            "reviews": "4.12 (78 reviews)",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        },
        {
          "id": 2,
          "title": "Free Ride",
          "subtitle": "Wendsday, 21st Oct. 2017",
          "backgroundImage": "assets/imgs/background/2.jpg",
          "icon": "chevron-forward-circle-outline",
          "iconText": "Read more",
          "items": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
            "reviews": "4.12 (78 reviews)",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        },
        {
          "id": 3,
          "title": "Mountain Tour",
          "subtitle": "Wednesday, July 05, 1983",
          "backgroundImage": "assets/imgs/background/0.jpg",
          "icon": "chevron-forward-circle-outline",
          "iconText": "Read more",
          "items": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
            "reviews": "4.12 (78 reviews)",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        },
        {
          "id": 4,
          "title": "Sea Tour",
          "subtitle": "Sunday, October 08, 1921",
          "backgroundImage": "assets/imgs/background/5.jpg",
          "icon": "chevron-forward-circle-outline",
          "iconText": "Read more",
          "items": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
            "reviews": "4.12 (78 reviews)",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        },
        {
          "id": 5,
          "title": "Bridge Tour",
          "subtitle": "Monday, June 26, 1949",
          "backgroundImage": "assets/imgs/background/6.jpg",
          "icon": "chevron-forward-circle-outline",
          "iconText": "Read more",
          "items": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
            "reviews": "4.12 (78 reviews)",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        },
        {
          "id": 6,
          "title": "Open Air Concert",
          "subtitle": "Thursday, May 19, 1992",
          "backgroundImage": "assets/imgs/background/7.jpg",
          "icon": "chevron-forward-circle-outline",
          "iconText": "Read more",
          "items": {
            "iconsStars": [
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": true,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              },
              {
                "isActive": false,
                "iconActive": "icon-star",
                "iconInactive": "icon-star-outline"
              }
            ],
            "reviews": "4.12 (78 reviews)",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Filters products',
      "button": "Refine",
      "header": "Filters",
      "items": [
        {
          "id": 1,
          "title": "T-Shirt",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "false"
            },
            {
              "title": "l",
              "isChecked": "true"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "true"
            }
          ]
        },
        {
          "id": 2,
          "title": "Pants",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "false"
            },
            {
              "title": "m",
              "isChecked": "false"
            },
            {
              "title": "l",
              "isChecked": "true"
            },
            {
              "title": "xl",
              "isChecked": "true"
            },
            {
              "title": "xxl",
              "isChecked": "true"
            }
          ]
        },
        {
          "id": 3,
          "title": "Jacket",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "true"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 4,
          "title": "Shoes",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "false"
            },
            {
              "title": "m",
              "isChecked": "false"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "true"
            },
            {
              "title": "xxl",
              "isChecked": "true"
            }
          ]
        },
        {
          "id": 5,
          "title": "Hoodies",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 6,
          "title": "bikini",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 7,
          "title": "blazer",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 8,
          "title": "boots",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 9,
          "title": "coat",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 10,
          "title": "dress",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        },
        {
          "id": 11,
          "title": "gloves",
          "icon": "icon-chevron-right",
          "items": [
            {
              "title": "s",
              "isChecked": "true"
            },
            {
              "title": "m",
              "isChecked": "true"
            },
            {
              "title": "l",
              "isChecked": "false"
            },
            {
              "title": "xl",
              "isChecked": "false"
            },
            {
              "title": "xxl",
              "isChecked": "false"
            }
          ]
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('listView/expandable/' + item.theme)
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
