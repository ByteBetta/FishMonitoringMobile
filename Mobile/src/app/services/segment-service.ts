import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SegmentService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Segment';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'segment/0', 'title': 'Segment List', 'theme': 'layout1' },
            { 'url': 'segment/1', 'title': 'Segment Card', 'theme': 'layout2' },
            { 'url': 'segment/2', 'title': 'Segment Post', 'theme': 'layout3' }
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
            'toolbarTitle': 'Segment List',
            "segmentButton1": "New Product",
            "segmentButton2": "Most Sold Products",
            "segmentButton3": "Make Order",
            // Data Page 1
            "page1": {
                "background": "assets/imgs/background/7.jpg",
                "items": [
                    {
                        "id": 1,
                        "title": "Cardigans Sweater",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/0.jpg",
                        "price": "$295.99"
                    },
                    {
                        "id": 2,
                        "title": "Sleeve Soft",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/2.jpg",
                        "price": "$395.99"
                    },
                    {
                        "id": 3,
                        "title": "Sleeve Soft ",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/4.jpg",
                        "price": "$295.99"
                    },
                    {
                        "id": 4,
                        "title": "Cute Knit Sweater",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/1.jpg",
                        "price": "$235.99"
                    },
                    {
                        "id": 5,
                        "title": "Button Down Knee",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/5.jpg",
                        "price": "$295.99"
                    }
                ]
            },
            // Data Page 2
            "page2": {
                "background": "assets/imgs/background/6.jpg",
                "items": [
                    {
                        "id": 1,
                        "title": "Black Quilted Jacket",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/6.jpg",
                    },
                    {
                        "id": 2,
                        "title": "Blue Hooded Jacket",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/1.jpg",
                    },
                    {
                        "id": 3,
                        "title": "Green Hooded Jacket",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/5.jpg",
                    },
                    {
                        "id": 4,
                        "title": "Brown Padded Jacket",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/0.jpg",
                    },
                    {
                        "id": 5,
                        "title": "Maroon Padded Jacket",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/imgs/avatar/2.jpg",
                    }
                ]
            },
            // Data Page 3
            "page3": {
              "title": "Make order now!",
              "subtitle": "Reorder list by your wish.",
              "button": "Get",
              "items": [
                  {
                      "id": 1,
                      "title": "White Pencil Skirt",
                      "subtitle": "20% Off",
                      "image": "assets/imgs/avatar/2.jpg",
                      "price": "$199.99"
                  },
                  {
                      "id": 2,
                      "title": "Orange A-Line Skirt",
                      "subtitle": "15% Off",
                      "image": "assets/imgs/avatar/3.jpg",
                      "price": "$295.99"
                  },
                  {
                      "id": 3,
                      "title": "Burgundy Lace Skirt",
                      "subtitle": "22% Off",
                      "image": "assets/imgs/avatar/6.jpg",
                      "price": "$1032.99"
                  },
                  {
                      "id": 4,
                      "title": "Pink Pencil Skirt",
                      "subtitle": "10% Off",
                      "image": "assets/imgs/avatar/0.jpg",
                      "price": "$1269.99"
                  },
                  {
                      "id": 5,
                      "title": "Burgundy Knee Skirt",
                      "subtitle": "12% Off",
                      "image": "assets/imgs/avatar/5.jpg",
                      "price": "$34.99"
                  },
                  {
                      "id": 6,
                      "title": "Denim Pencil Skirt",
                      "subtitle": "14% Off",
                      "image": "assets/imgs/avatar/7.jpg",
                      "price": "$499.99"
                  },
              ]
            }
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Segment Card',
            "segmentButton1": "Profile",
            "segmentButton2": "All Products",
            "segmentButton3": "About Us",
            // Data Page 1
            "page1": {
              "image": "assets/imgs/avatar/22.jpg",
              "title": "Carolyn Guerrero",
              "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
              "category": "populary",
              "followers": "Followers",
              "valueFollowers": "439",
              "following": "Following",
              "valueFollowing": "297",
              "posts": "Posts",
              "valuePosts": "43",
              "items": [
                  {
                      "id": 1,
                      "category": "Engineering News",
                      "title": "New definition returns meaning to information",
                      "like": {
                          "icon": "heart",
                          "text": "Like",
                          "isActive": true
                      },
                      "comment": {
                          "icon": "chatbubbles",
                          "number": "4",
                          "text": "Comments",
                          "isActive": false
                      }
                  },
                  {
                      "id": 2,
                      "category": "Science News",
                      "title": "Investigating glaciers in depth",
                      "like": {
                          "icon": "heart",
                          "text": "Like",
                          "isActive": true
                      },
                      "comment": {
                          "icon": "chatbubbles",
                          "number": "4",
                          "text": "Comments",
                          "isActive": false
                      }
                  },
                  {
                      "id": 3,
                      "category": "Science News",
                      "title": "Nanodiamonds as photocatalysts",
                      "like": {
                          "icon": "heart",
                          "text": "Like",
                          "isActive": true
                      },
                      "comment": {
                          "icon": "chatbubbles",
                          "number": "4",
                          "text": "Comments",
                          "isActive": false
                      }
                  }
              ]
            },
            // Data Page 2
            "page2": {
                "items": [
                    {
                        "id": 1,
                        "title": "Free Ride",
                        "subtitle": "Category: Travel",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/imgs/background/1.jpg",
                    },
                    {
                        "id": 2,
                        "title": "Mountain Tour",
                        "subtitle": "Category: Travel",
                        "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                        "image": "assets/imgs/background/2.jpg",
                    },
                    {
                        "id": 3,
                        "title": "Sea Tour",
                        "subtitle": "Category: Travel",
                        "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                        "image": "assets/imgs/background/3.jpg",
                    },
                    {
                        "id": 4,
                        "title": "Main Stage Event",
                        "subtitle": "Category: Travel",
                        "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                        "image": "assets/imgs/background/4.jpg",
                    },
                ]
            },
            // Data Page 3
            "page3": {
              'toolbarTitle': 'GMAPS + About Us',
              'title': 'Creative Studio Form',
              'titleDescription': 'Design & Development agency',
              'contentTitle': 'About us',
              'contentDescription': `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris.
               Consequat gravida pretium ligula lectus;
                Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!`,
              'iconLoacation': 'icon-map-marker-radius',
              'iconLoacationText': 'Design Street, New York, USA',
              'iconWatch': 'icon-alarm',
              'iconWatchText': '8:00 to 16:00 working days',
              'iconPhone': 'icon-phone',
              'iconPhoneText': '333 222 111',
              'iconEarth': 'icon-earth',
              'iconEarthText': 'www.csform.com',
              'iconEmail': 'icon-email-outline',
              'iconEmailText': 'dev@csform.com',
              'titleMap': 'Here we are :',
              'map': {
                  'lat': 40.712562,
                  'lng': -74.005911,
                  'zoom': 15,
                  'mapTypeControl': true,
                  'streetViewControl': true
              }
            }
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Segment Post',
            "segmentButton1": "Profile",
            "segmentButton2": "All Post",
            "segmentButton3": "Old Post",
            // Data Page 1
            "page1": {
            "image": "assets/imgs/avatar/24.jpg",
            "title": "Carolyn Guerrero",
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "items": [
                {
                    "id": 1,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/0.jpg",
                    "title": "Sea bridge opens between hong kong",
                    "like": {
                        "icon": "heart",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 2,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/6.jpg",
                    "title": "The World's longest sea opens",
                    "like": {
                        "icon": "heart",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                },
                {
                    "id": 3,
                    "category": "architecture",
                    "backgroundCard": "assets/imgs/background/2.jpg",
                    "title": "The 'bank of africa tower' will be tallest",
                    "like": {
                        "icon": "heart",
                        "text": "Like",
                        "isActive": true
                    },
                    "comment": {
                        "icon": "chatbubbles",
                        "number": "4",
                        "text": "Comments",
                        "isActive": false
                    }
                }
            ]
         },
            // Data Page 2
            "page2": {
              "items": [
                  {
                      "id": 1,
                      "title": "Free Ride",
                      "backgroundImage": "assets/imgs/background/0.jpg",
                      "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                  },
                  {
                      "id": 2,
                      "title": "Bridge Tour",
                      "backgroundImage": "assets/imgs/background/1.jpg",
                      "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                  },
                  {
                      "id": 3,
                      "title": "Sea Tour",
                      "backgroundImage": "assets/imgs/background/2.jpg",
                      "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                  },
                  {
                      "id": 4,
                      "title": "Main Stage Event",
                      "backgroundImage": "assets/imgs/background/3.jpg",
                      "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                  },
                  {
                      "id": 5,
                      "title": "Classic Open Air",
                      "backgroundImage": "assets/imgs/background/4.jpg",
                      "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                  },
                  {
                      "id": 6,
                      "title": "Concert Summer",
                      "backgroundImage": "assets/imgs/background/6.jpg",
                      "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                  },
                  {
                      "id": 7,
                      "title": "Open Air Concerts",
                      "backgroundImage": "assets/imgs/background/7.jpg",
                      "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                  }
              ]
            },
            // Data Page 2
            "page3": {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/imgs/background/15.jpg",
                        "time": "09 May 2018",
                        "title": "Blue A-Line Denim Pencil Skirt",
                        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout....",
                        "like": {
                            "icon":"heart",
                            "number": "12",
                            "isActive": false
                        },
                        "comment": {
                            "icon":"chatbubbles",
                            "number": "4",
                            "isActive": false
                        }
                    },
                    {
                        "id": 2,
                        "image": "assets/imgs/background/16.jpg",
                        "time": "08 July 2018",
                        "title": "Rust Orange Solid Pleated Skirt",
                        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout....",
                        "like": {
                            "icon":"heart",
                            "number": "12",
                            "isActive": false
                        },
                        "comment": {
                            "icon":"chatbubbles",
                            "number": "4",
                            "isActive": false
                        }
                    },
                    {
                        "id": 3,
                        "image": "assets/imgs/background/17.jpg",
                        "time": "11 September 2018",
                        "title": "Beige & Orange Printed Skirt",
                        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout....",
                        "like": {
                            "icon":"heart",
                            "number": "12",
                            "isActive": false
                        },
                        "comment": {
                            "icon":"chatbubbles",
                            "number": "4",
                            "isActive": false
                        }
                    },
                    {
                        "id": 4,
                        "image": "assets/imgs/background/18.jpg",
                        "time": "23 July 2018",
                        "title": "Brown Checked A-Line Skirt",
                        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout....",
                        "like": {
                            "icon":"heart",
                            "number": "12",
                            "isActive": false
                        },
                        "comment": {
                            "icon":"chatbubbles",
                            "number": "4",
                            "isActive": false
                        }
                    },
                    {
                        "id": 5,
                        "image": "assets/imgs/background/19.jpg",
                        "time": "05 June 2018",
                        "title": "Black Solid Midi A-line Skirt",
                        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout....",
                        "like": {
                            "icon":"heart",
                            "number": "12",
                            "isActive": false
                        },
                        "comment": {
                            "icon":"chatbubbles",
                            "number": "4",
                            "isActive": false
                        }
                    }
                ]
            }
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('segment/' + item.theme)
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
