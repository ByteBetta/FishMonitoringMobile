import { ValidationService } from './validation';
import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class TabsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'tab/0/tab/tab1', 'title': 'Footer tab - text', 'theme': 'layout1' },
      { 'url': 'tab/1/tab/tab4', 'title': 'Footer tab - icons', 'theme': 'layout2' },
      { 'url': 'tab/2/tab/tab7', 'title': 'Header tab - text', 'theme': 'layout3' }
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.charAt(0).toUpperCase() +
      menuItem.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForTab1 = (): any => {
    return {
      "headerImage": "assets/imgs/background/3.jpg",
      "avatar": "assets/imgs/avatar/20.jpg",
      "title": "Jessica White",
      "subtitle": "47 Holmes Green, Sophiebury, WP9M 3ZZ",
      "description": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
      "follow": "follow",
      "massage": "massage",
      "listFriends": "Friends",
      "namberFriends": "347 Friends",
      "buttonSeeAll": "See all friends",
      "gallery": "Gallery",
      "namberImages": "750 images",
      "buttonSeeAllImages": "See all images",
      "timeline": "Timeline",
      "friends": [
        {
          "id": 1,
          "image": "assets/imgs/avatar/24.jpg",
          "title": "Grant Marshall"
        },
        {
          "id": 2,
          "image": "assets/imgs/avatar/10.jpg",
          "title": "Pena Valdez"
        },
        {
          "id": 3,
          "image": "assets/imgs/avatar/11.jpg",
          "title": "Jessica Miles"
        },
        {
          "id": 4,
          "image": "assets/imgs/avatar/12.jpg",
          "title": "Kerri Barber"
        },
        {
          "id": 5,
          "image": "assets/imgs/avatar/13.jpg",
          "title": "Natasha Gamble"
        },
        {
          "id": 6,
          "image": "assets/imgs/avatar/14.jpg",
          "title": "Carol Petersen"
        },
        {
          "id": 7,
          "image": "assets/imgs/avatar/15.jpg",
          "title": "Julia Petersen"
        },
        {
          "id": 8,
          "image": "assets/imgs/avatar/16.jpg",
          "title": "Marisa Cain"
        }
      ],
      "fullGallery": [
        {
          "id": 1,
          "image": "assets/imgs/background/14.jpg",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/15.jpg",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/16.jpg",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/17.jpg",
        }
      ],
      "items": [
        {
          "id": 1,
          "avatar": "assets/imgs/avatar/24.jpg",
          "title": "Neil Roberts",
          "subtitle": "neil@gmail.com",
          "time": "15min ago",
          "image": "assets/imgs/background/0.jpg",
          "cardTitle": "Paris",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "12",
          "numberCommnet": "31",

        },
        {
          "id": 2,
          "avatar": "assets/imgs/avatar/11.jpg",
          "title": "Samantha Keny",
          "subtitle": "sam@gmail.com",
          "time": "18min ago",
          "image": "assets/imgs/background/2.jpg",
          "cardTitle": "Moscow",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "55",
          "numberCommnet": "33",
        },
        {
          "id": 3,
          "avatar": "assets/imgs/avatar/12.jpg",
          "title": "Liam Hughes",
          "subtitle": "liam@gmail.com",
          "time": "20min ago",
          "image": "assets/imgs/background/3.jpg",
          "cardTitle": "London",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "12",
          "numberCommnet": "14",
        },
        {
          "id": 4,
          "avatar": "assets/imgs/avatar/13.jpg",
          "title": "Caitlin Wilkinson",
          "subtitle": "caitlin@gmail.com",
          "time": "21min ago",
          "image": "assets/imgs/background/4.jpg",
          "cardTitle": "Berlin",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          "iconLike": "heart",
          "iconComment": "chatbubbles",
          "numberLike": "123 ",
          "numberCommnet": "41 Comments",
        }
      ]
    };
  }

  //* Data Set for page 2
  getDataForTab2 = (): any => {
    return {
      'headerTitle': "List Frends",
      "items": [
        {
          "title": "Isabel Villar",
          "subtitle": "@isabel.villar",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/17.jpg"
        },
        {
          "title": "Silvia Salvador",
          "subtitle": "@silvia.salvador",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/16.jpg"
        },
        {
          "title": "Marguerite Thibault",
          "subtitle": "@marguerite.thib",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/15.jpg"
        },
        {
          "title": "Marianne Maillet",
          "subtitle": "@marianne.maillet",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/14.jpg"
        },
        {
          "title": "Julie Martins",
          "subtitle": "@julie.martins",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/13.jpg"
        },
        {
          "title": "Sofia Zepeda",
          "subtitle": "@sofia.zepeda",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/12.jpg"
        },
        {
          "title": "Nathalie Voisin",
          "subtitle": "@nathalie.voisin",
          "follow": "follow",
          "avatar": "assets/imgs/avatar/11.jpg"
        }
      ]
    };
  }

  //* Data Set for page 3
  getDataForTab3 = (): any => {
    return {
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
    };
  }

  //* Data Set for page 4
  getDataForTab4 = (): any => {
    return {
      "title": "Top Stories",
      "recommender": "Recommender",
      "shareIcon": "ellipsis-horizontal",
      "buttonSeeAll": "See All",
      "iconMore": "arrow-forward-outline",
      "items": [
        {
          "id": 1,
          "avatar": "assets/imgs/avatar/11.jpg",
          "avatarTitle": "Pena Valdez",
          "avatarSubtitle": "pena@gmail.com",
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/16.jpg",
          "title": "Women's Hairstyles",
          "description": "It is a long established fact that a reader will be distracted by the readable....",
          "likeIcon": "heart",
          "likeNumber": "4",
          "likeText": "Like",
          "commentIcon": "chatbubbles",
          "commentNumber": "4",
          "commentText": "Comments",
        },
        {
          "id": 2,
          "avatar": "assets/imgs/avatar/12.jpg",
          "avatarTitle": "Grant Marshall",
          "avatarSubtitle": "grant@gmail.com",
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/17.jpg",
          "title": "Hair Colors",
          "description": "It is a long established fact that a reader will be distracted by the readable....",
          "likeIcon": "heart",
          "likeNumber": "4",
          "likeText": "Like",
          "commentIcon": "chatbubbles",
          "commentNumber": "4",
          "commentText": "Comments",
        },
        {
          "id": 3,
          "avatar": "assets/imgs/avatar/10.jpg",
          "avatarTitle": "Neil Roberts",
          "avatarSubtitle": "neil@gmail.com",
          "category": "Fashion",
          "backgroundCard": "assets/imgs/background/18.jpg",
          "title": "Male Hats",
          "description": "It is a long established fact that a reader will be distracted by the readable....",
          "likeIcon": "heart",
          "likeNumber": "4",
          "likeText": "Like",
          "commentIcon": "chatbubbles",
          "commentNumber": "4",
          "commentText": "Comments",
        }
      ],
      "category": [
        {
          "id": 1,
          "image": "assets/imgs/background/1.jpg",
          "title": "Skiing",
          "subtitle": "10 stories",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/2.jpg",
          "title": "Skateboard",
          "subtitle": "13 stories",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/3.jpg",
          "title": "Surfing",
          "subtitle": "12 stories",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/4.jpg",
          "title": "Motorcycle",
          "subtitle": "4 stories",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/5.jpg",
          "title": "Concert",
          "subtitle": "10 stories",
        },
        {
          "id": 6,
          "image": "assets/imgs/background/6.jpg",
          "title": "Music",
          "subtitle": "8 stories",
        },
        {
          "id": 7,
          "image": "assets/imgs/background/7.jpg",
          "title": "Guitars",
          "subtitle": "9 stories",
        },
        {
          "id": 8,
          "image": "assets/imgs/background/8.jpg",
          "title": "Concert",
          "subtitle": "33 stories",
        },
        {
          "id": 9,
          "image": "assets/imgs/background/9.jpg",
          "title": "Tennis",
          "subtitle": "2 stories",
        },
        {
          "id": 10,
          "image": "assets/imgs/background/10.jpg",
          "title": "Fashion",
          "subtitle": "23 storiesh",
        },
      ]
    };
  }

  //* Data Set for page 5
  getDataForTab5 = (): any => {
    return {
      'items': [
        {
          'id': 1,
          'image': 'assets/imgs/background/1.jpg',
          'title': 'Chevrolet Corvette',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 2,
          'image': 'assets/imgs/background/2.jpg',
          'title': 'BMW M3 ',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 3,
          'image': 'assets/imgs/background/3.jpg',
          'title': 'XR250 Tornado',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 4,
          'image': 'assets/imgs/background/4.jpg',
          'title': 'Shortboard',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 5,
          'image': 'assets/imgs/background/5.jpg',
          'title': 'Skateboard decks ',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          'id': 6,
          'image': 'assets/imgs/background/6.jpg',
          'title': ' Ski board ',
          'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        }
      ]
    };
  }

  //* Data Set for page 6
  getDataForTab6 = (): any => {
    return {
      'yourName': 'Your Name',
      'title': 'Title',
      'description': 'Enter a description',
      'button': ' Write Comment'
    };
  }

  //* Data Set for page 7
  getDataForTab7 = (): any => {
    return {
      'headerImage': 'assets/imgs/background/0.jpg',
      'title': 'Infinit pontem in Sinis',
      'subtitle': 'Per Marescalluml',
      'category': 'Category',
      'avatar': 'assets/imgs/avatar/13.jpg',
      'shareIcon': 'ellipsis-horizontal',
      'actionSheet': {
        'buttons': [
          {
            'text': 'Add to Cart',
            'role': 'destructive'
          },
          {
            'text': 'Add to Favorites'
          },
          {
            'text': 'Read more info'
          },
          {
            'text': 'Delete Item'
          },
          {
            'text': 'Cancel',
            'role': 'cancel'
          }
        ]
      },
      'items': [
        {
          'id': 1,
          'subtitle': "Hoc est, visu nova thriller, posuit orbem in fimbriis modern arte, quae est tenebrosa, haunting, torta - vertit se et in suo modo. Non quod objective, et arte discipulus apud Notingham, nuper Jack quae ducitur 'diluvium, ' frigus, saeva enfant inexpugnabiles omnes modern art. Et vadit ad deversorium cubiculum vult bibere et cetera id exuendum statum tunc illa e somno evigilans in lecto suo."
        },
        {
          'id': 2,
          'subtitle': 'Percussas pavore est, sane, sed etiam in auribus eorum amplius diluvium ad inveniendum, qui utitur maxime auctoribus imaginum cinematographicarum praebere video camera ejus vita (hoc est ars, ut videtur). Et obliti sunt ea nocte in hotel cubiculum terminus sursum in quodam loco quis gallery? Si illa ad magistratus? Et factum est, ut quod deest illi amice Jenny?'
        },
        {
          'id': 3,
          'subtitle': 'It takes sursum magis, nimis longum est aedificate (usque ad paginam fere CLX) Ad validam in mia quia actio, sed altiore hoc est a dolor modern thriller, et fortiter mentis habitu femineo (adhuc inusitato scelus ficta). Jaq Hazell vigilare sit an author.'
        },
        {
          'id': 4,
          'subtitle': 'Vesalius habet cum ramosis in lupinotuum, conscripserit et comici librorum, sed saeva Lane videt eum quasi animam suam antiquis nota mundo, quamvis tempus suum ingenia sunt paulo plus crevit et hi qui crediderant, cum ex Novus York ad urbem est viridius, affluentes, et suburbana earum.'
        }
      ]
    };
  }

  //* Data Set for page 8
  getDataForTab8 = (): any => {
    return {
      "title": "New Today",
      "buttonSeeAll": "See all",
      "icon": "arrow-forward-outline",
      "items": [
        {
          "id": 1,
          "image": "assets/imgs/background/14.jpg",
          "time": "09 May 2018",
          "title": "Photo Editor",
          "description": "This free iPhone App boasts 120 million users and picked up Apple's App...",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/15.jpg",
          "time": "08 July 2018",
          "title": "Muted beauty",
          "description": "Muted colours – off whites, beiges, light browns and lighte...",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/16.jpg",
          "time": "11 September 2018",
          "title": "Butterfly Amour",
          "description": "Butterflies may be a symbol of femininity, but that no longer means..",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/17.jpg",
          "time": "23 July 2018",
          "title": "Moody moments",
          "description": "To bring anything into your life, imagine that it’s already there. – Richard Bach",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/18.jpg",
          "time": "05 June 2018",
          "title": "Romantic masters",
          "description": "Speaking of romance, the bedroom in 2017 is all about romance. ",
        }
      ],
      "slider": [
        {
          "id": 1,
          "image": "assets/imgs/background/1.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Offer",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/2.jpg",
          "title": "Main Stage Event",
          "subtitle": "Main Event",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/3.jpg",
          "title": "Bridge Tour",
          "subtitle": "Mountain",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/4.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Tourt",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/5.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 6,
          "image": "assets/imgs/background/6.jpg",
          "title": "Sea ture",
          "subtitle": "Bridge Tour",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 7,
          "image": "assets/imgs/background/7.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Events",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
        {
          "id": 8,
          "image": "assets/imgs/background/8.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
          "iconLike": "heart",
          "like": "12",
          "iconComment": "chatbubbles",
          "comment": "16",
        },
      ]
    };
  }

  //* Data Set for page 9
  getDataForTab9 = (): any => {
    return {
      "map": {
        "lat": 40.712562,
        "lng": -74.005911,
        "zoom": 15,
        "mapTypeControl": true,
        "streetViewControl": true,
      },
      "slider": [
        {
          "id": 1,
          "image": "assets/imgs/background/1.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Offer",
        },
        {
          "id": 2,
          "image": "assets/imgs/background/2.jpg",
          "title": "Main Stage Event",
          "subtitle": "Main Event",
        },
        {
          "id": 3,
          "image": "assets/imgs/background/3.jpg",
          "title": "Bridge Tour",
          "subtitle": "Mountain",
        },
        {
          "id": 4,
          "image": "assets/imgs/background/4.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Tourt",
        },
        {
          "id": 5,
          "image": "assets/imgs/background/5.jpg",
          "title": "Mountain Trout",
          "subtitle": "Mountain",
        },
        {
          "id": 6,
          "image": "assets/imgs/background/6.jpg",
          "title": "Sea ture",
          "subtitle": "Bridge Tour",
        },
        {
          "id": 7,
          "image": "assets/imgs/background/7.jpg",
          "title": "Free Ride Tour",
          "subtitle": "Best Events",
        },
      ]
    };
  }

  load(item: string): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('tab/' + item)
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
