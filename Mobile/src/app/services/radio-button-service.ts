import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class RadioButtonService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Radio Button';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'radio-button/0', 'title': 'Simple', 'theme': 'layout1' },
      { 'url': 'radio-button/1', 'title': 'With avatars', 'theme': 'layout2' },
      { 'url': 'radio-button/2', 'title': 'Simple 2', 'theme': 'layout3' }
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
      'toolbarTitle': 'Simple',
      "title": "Your country",
      "selectedItem": 3,
      "items": [
        { "id": 1, "title": "Mayotte" },
        { "id": 2, "title": "El Salvador" },
        { "id": 4, "title": "Slovak Republic" },
        { "id": 3, "title": "Myanmar" },
        { "id": 5, "title": "Sudan" },
        { "id": 6, "title": "Venezuela" },
        { "id": 7, "title": "Canada" },
        { "id": 8, "title": "French Polynesia" },
        { "id": 9, "title": "Zambia" },
        { "id": 10, "title": "Libya" },
        { "id": 11, "title": "Swaziland" },
        { "id": 12, "title": "Uruguay" },
        { "id": 13, "title": "Ireland" }
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'With avatars',
      "title": "Following",
      "selectedItem": 4,
      "items": [
        { "id": 1, "title": "Julia Petersen", "subtitle": "@julia333", "avatar": "assets/imgs/avatar/0.jpg" },
        { "id": 2, "title": "Holman Valencia", "subtitle": "@holmanval", "avatar": "assets/imgs/avatar/1.jpg" },
        { "id": 4, "title": "Marisa Cain", "subtitle": "@marisa", "avatar": "assets/imgs/avatar/2.jpg" },
        { "id": 3, "title": "Dejesus Norris", "subtitle": "@norris", "avatar": "assets/imgs/avatar/3.jpg" },
        { "id": 5, "title": "Gayle Gaines", "subtitle": "@Gayle", "avatar": "assets/imgs/avatar/4.jpg" },
        { "id": 6, "title": "Prince Phelps", "subtitle": "@phelps123", "avatar": "assets/imgs/avatar/5.jpg" },
        { "id": 7, "title": "Keri Hudson", "subtitle": "@kerri333", "avatar": "assets/imgs/avatar/6.jpg" },
        { "id": 8, "title": "Duran Clayton", "subtitle": "@duran44", "avatar": "assets/imgs/avatar/7.jpg" },
        { "id": 9, "title": "Lara Lynn", "subtitle": "@lara", "avatar": "assets/imgs/avatar/8.jpg" },
        { "id": 10, "title": "Perry Bradley", "subtitle": "@bradley", "avatar": "assets/imgs/avatar/9.jpg" }
      ]
    };
  }

  //* Data Set for page 3
  getDataForLayout3 = (): any => {
    return {
      'toolbarTitle': 'Simple 2',
      "title" : "Loctions",
      "selectedItem": 4,
      "items" : [
        {"id" : 1, "title": "Brogan", "subtitle": "Chad"},
        {"id" : 2, "title": "Rehrersburg", "subtitle": "Romania"},
        {"id" : 4, "title": "Durham", "subtitle": "Mauritania"},
        {"id" : 3, "title": "Callaghan", "subtitle": "Tonga"},
        {"id" : 5, "title": "Manitou", "subtitle": "Norway"},
        {"id" : 6, "title": "Weedville", "subtitle": "Northern Mariana Islands"},
        {"id" : 7, "title": "Curtice", "subtitle": "Nauru"},
        {"id" : 8, "title": "Barronett", "subtitle": "Iran"},
        {"id" : 9, "title": "Urie", "subtitle": "Swaziland"},
        {"id" : 10, "title": "Blackgum", "subtitle": "Uruguay"},
        {"id" : 11, "title": "Bannock", "subtitle": "Mayotte"},
        {"id" : 12, "title": "Singer", "subtitle": "El Salvador"},
        {"id" : 13, "title": "Nutrioso", "subtitle": "Slovak Republic"}
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('radioButton/' + item.theme)
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
