import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';
import { UserClassService } from './user-class.service';

@Injectable({ providedIn: 'root' })
export class ProfileService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService, private userService: UserClassService) { }

    getTitle = (): string => 'Profile';


    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'profile/4', 'title': 'Profile with Big Image', 'theme': 'layout5' }
        ];
    }

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }


    //* Data Set for page 5
    getDataForLayout5 = (): any => {
        return {
            'toolbarTitle': 'Profile with Big Image',
            "headerImage": "assets/imgs/background/bannerProfile.png",
            "image": "assets/imgs/avatar/12.jpg",
            "title": '',
            "subtitle": "Extreme coffee lover. Twitter maven. Internet practitioner. Beeraholic.",
            "category": "populary",
            "followers": "Followers",
            "valueFollowers": "439",
            "following": "Following",
            "valueFollowing": "297",
            "posts": "Posts",
            "valuePosts": "43",
            "logoFacebook": "logo-facebook",
            "logoTwitter": "logo-twitter",
            "logoInstagram": "logo-instagram",
            "items": [
                {
                    "id": 1,
                    "iconPhone": "call",
                    "iconMail": "mail-open",
                    "iconGlobe": "globe",
                    "phone":'' ,
                    "mail":'' ,
                    "globe": "csform.com",
                    "content": "Content",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    "title": "About",
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('profile/' + item.theme)
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
