import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AnimationService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Animation';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'animation/0', 'title': 'FadeIn Up', 'theme': 'layout1' },
      { 'url': 'animation/1', 'title': 'FadeIn Left', 'theme': 'layout2' },
      { 'url': 'animation/2', 'title': 'BounceIn', 'theme': 'layout3' },
      { 'url': 'animation/3', 'title': 'ZoomIn', 'theme': 'layout4' },
      { 'url': 'animation/4', 'title': 'BounceIn Left', 'theme': 'layout5' },
      { 'url': 'animation/5', 'title': 'FadeIn', 'theme': 'layout6' },
      { 'url': 'animation/6', 'title': 'BounceIn Right', 'theme': 'layout7' },
      { 'url': 'animation/7', 'title': 'SlideIn Left', 'theme': 'layout8' },
      { 'url': 'animation/8', 'title': 'SlideIn Up And FadeIn Left And Right', 'theme': 'layout9' },
      { 'url': 'animation/9', 'title': 'FadeIn And FadeIn Right', 'theme': 'layout10' }

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
      'toolbarTitle': 'FadeIn Up',
      "items": [
        {
          "id": 1,
          "title": "Grant Marshall",
          "subtitle": "@grant333",
          "isChecked": false,
          "image": "assets/imgs/avatar/1.jpg"
        },
        {
          "id": 2,
          "title": "Pena Valdez",
          "subtitle": "@penaxxy",
          "isChecked": false,
          "image": "assets/imgs/avatar/2.jpg"
        },
        {
          "id": 4,
          "title": "Jessica Miles",
          "subtitle": "@jessica957",
          "isChecked": true,
          "image": "assets/imgs/avatar/3.jpg"
        },
        {
          "id": 3,
          "title": "Kerri Barber",
          "subtitle": "@kerri333",
          "isChecked": true,
          "image": "assets/imgs/avatar/4.jpg"
        },
        {
          "id": 5,
          "title": "Natasha Gamble",
          "subtitle": "@natashaxxy",
          "isChecked": true,
          "image": "assets/imgs/avatar/5.jpg"
        },
        {
          "id": 6,
          "title": "White Castaneda",
          "subtitle": "@white34",
          "isChecked": true,
          "image": "assets/imgs/avatar/6.jpg"
        },
        {
          "id": 7,
          "title": "Vanessa Ryan",
          "subtitle": "@vanessa957",
          "isChecked": true,
          "image": "assets/imgs/avatar/7.jpg"
        },
        {
          "id": 8,
          "title": "Meredith Hendricks",
          "subtitle": "@meredith957",
          "isChecked": true,
          "image": "assets/imgs/avatar/1.jpg"
        },
        {
          "id": 9,
          "title": "Carol Kelly",
          "subtitle": "@carolm_e",
          "isChecked": true,
          "image": "assets/imgs/avatar/2.jpg"
        },
        {
          "id": 10,
          "title": "Barrera Ramsey",
          "subtitle": "@barreraxxy",
          "isChecked": true,
          "image": "assets/imgs/avatar/3.jpg"
        }
      ]
    }
  }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
      return {
        'toolbarTitle': 'FadeIn Left',
        "header": "Cart",
        "title": "Make order now!",
        "subtitle": "Reorder list by your wish.",
        "button": "get",
        "items": [
          {
            "id": 1,
            "title": "Swim suit",
            "subtitle": "20% Off",
            "image": "assets/imgs/avatar/17.jpg",
            "price": "$5.99"
          },
          {
            "id": 2,
            "title": "Hat",
            "subtitle": "2% Off",
            "image": "assets/imgs/avatar/18.jpg",
            "price": "$21.60"
          },
          {
            "id": 3,
            "title": "Sweater",
            "subtitle": "29% Off",
            "image": "assets/imgs/avatar/19.jpg",
            "price": "$27.90"
          },
          {
            "id": 4,
            "title": "Shirt",
            "subtitle": "10% Off",
            "image": "assets/imgs/avatar/20.jpg",
            "price": "$35.00"
          },
          {
            "id": 5,
            "title": "Top",
            "subtitle": "24% Off",
            "image": "assets/imgs/avatar/21.jpg",
            "price": "$3.99"
          },
          {
            "id": 6,
            "title": "pullover",
            "subtitle": "4% Off",
            "image": "assets/imgs/avatar/22.jpg",
            "price": "$5.99"
          },
          {
            "id": 7,
            "title": "tog",
            "subtitle": "30% Off",
            "image": "assets/imgs/avatar/11.jpg",
            "price": "$15.99"
          }
        ]
      };
    }

      //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle' : 'BounceIn',
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

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
      return {
        'toolbarTitle' : 'ZoomIn',
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

      //* Data Set for page 5
  getDataForLayout5 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Left',
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
    }
  }

    //* Data Set for page 6
    getDataForLayout6 = (): any => {
      return {
        'toolbarTitle' : 'FadeIn',
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
      }
    }

      //* Data Set for page 7
  getDataForLayout7 = (): any => {
    return {
      'toolbarTitle': 'BounceIn Right',
      'items':[
        {
          'id': 1,
          'title': 'Vanessa Ryan',
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 2,
          'title': 'Lara Lynn',
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 3,
          'title': 'Gayle Gaines',
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 4,
          'title': 'Barbara Bernard',
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 5,
          'title': 'Josefa Gardner',
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 6,
          'title': 'Juliette Medina',
          'image': 'assets/imgs/avatar/6.jpg'
        },
        {
          'id': 7,
          'title': 'Vanessa Ryan',
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 8,
          'title': 'Lara Lynn',
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 9,
          'title': 'Gayle Gaines',
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 10,
          'title': 'Barbara Bernard',
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 11,
          'title': 'Josefa Gardner',
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 12,
          'title': 'Juliette Medina',
          'image': 'assets/imgs/avatar/6.jpg'
        },
        {
          'id': 13,
          'title': 'Vanessa Ryan',
          'image': 'assets/imgs/avatar/1.jpg'
        },
        {
          'id': 14,
          'title': 'Lara Lynn',
          'image': 'assets/imgs/avatar/2.jpg'
        },
        {
          'id': 15,
          'title': 'Gayle Gaines',
          'image': 'assets/imgs/avatar/3.jpg'
        },
        {
          'id': 16,
          'title': 'Barbara Bernard',
          'image': 'assets/imgs/avatar/4.jpg'
        },
        {
          'id': 17,
          'title': 'Josefa Gardner',
          'image': 'assets/imgs/avatar/5.jpg'
        },
        {
          'id': 18,
          'title': 'Juliette Medina',
          'image': 'assets/imgs/avatar/6.jpg'
        }
      ]
    }
  }

    //* Data Set for page 8
    getDataForLayout8 = (): any => {
      return {
        'toolbarTitle': 'SlideIn Left',
        'allComments': '2121 Comments',
        'items': [
            {
                'id': 1,
                'image': 'assets/imgs/avatar/16.jpg',
                'title': 'Erica Romaguera',
                'time': '18 August 2018 at 12:20pm',
                'description': 'If you could have any kind of pet, what would you choose?'
            },
            {
                'id': 2,
                'image': 'assets/imgs/avatar/15.jpg',
                'title': 'Caleigh Jerde',
                'time': '18 August 2018 at 8:13pm',
                'description': 'If you could learn any language, what would you choose?'
            },
            {
                'id': 3,
                'image': 'assets/imgs/avatar/14.jpg',
                'title': 'Lucas Schultz',
                'time': '18 August 2018 at 5:22pm',
                'description': 'Life is about making an impact, not making an income.'
            },
            {
                'id': 4,
                'image': 'assets/imgs/avatar/13.jpg',
                'title': 'Carole Marvin',
                'time': '18 August 2018 at 7:36am',
                'description': `I\’ve learned that people will forget what you said,
                 people will forget what you did, but people will never forget how you made them feel`
            },
            {
                'id': 5,
                'image': 'assets/imgs/avatar/12.jpg',
                'title': 'Doriana Feeney',
                'time': '18 August 2018 at 5:28am',
                'description': 'Definiteness of purpose is the starting point of all achievement.'
            },
            {
                'id': 6,
                'image': 'assets/imgs/avatar/11.jpg',
                'title': 'Nia Gutkowski',
                'time': '18 August 2018 at 11:27pm',
                'description': 'Life is what happens to you while you’re busy making other plans'
            }
        ]
      }
    }

      //* Data Set for page 9
  getDataForLayout9 = (): any => {
    return {
      'toolbarTitle': 'SlideIn Up And FadeIn Left And Right',
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
      "follow": "Follow",
      "message": "Contact",
      "items": [
          {
              "id": 1,
              "category": "architecture",
              "backgroundCard": "assets/imgs/background/0.jpg",
              "title": "Sea bridge opens between hong kong and china",
              "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": false
              },
              "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
              }
          },
          {
              "id": 2,
              "category": "architecture",
              "backgroundCard": "assets/imgs/background/6.jpg",
              "title": "The World's longest sea crossing opens",
              "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": false
              },
              "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
              }
          },
          {
              "id": 3,
              "category": "architecture",
              "backgroundCard": "assets/imgs/background/7.jpg",
              "title": "The 'bank of africa tower' will be tallest",
              "like": {
                  "icon": "heart",
                  "number": "4",
                  "text": "Like",
                  "isActive": false
              },
              "comment": {
                  "icon": "chatbubbles",
                  "number": "4",
                  "text": "Comments",
              }
          }
      ]
    }
  }

    //* Data Set for page 10
    getDataForLayout10 = (): any => {
      return {
        'toolbarTitle': 'FadeIn And FadeIn Right',
        "headerImage": "assets/imgs/background-small/0.jpg",
        "title": "What models will do when robots take their jobs?",
        "subtitle": "Showbiz",
        "items": [
          {
            "id": 1,
            "title": "Grant Marshall",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/0.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 2,
            "title": "Pena Valdez",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/1.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 3,
            "title": "Jessica Miles",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/2.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 4,
            "title": "Kerri Barber",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/3.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 5,
            "title": "Natasha Gamble",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/4.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 6,
            "title": "White Castaneda",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/5.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 7,
            "title": "Vanessa Ryan",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/6.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 8,
            "title": "Meredith Hendricks",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/7.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 9,
            "title": "Carol Kelly",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/1.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 10,
            "title": "Barrera Ramsey",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/2.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 11,
            "title": "Julia Petersen",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/0.jpg",
            "imageAlt": "avatar",
            "button": "READ"
          },
          {
            "id": 12,
            "title": "Holman Valencia",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "assets/imgs/avatar/3.jpg",
            "imageAlt": "Presque Isle Harbor",
            "button": "READ"
          }
        ]
      }
    }


  load(item: any): Observable<any> {
    const that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('animation/' + item.theme)
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
