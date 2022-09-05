import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProfileService } from '../services/profile-service';
import { User, UserClassService } from '../services/user-class.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: Observable<User>;
  whitespace: string;

  data = {};
  type: string;
  islogin = false;

  pic: any;
  collection = {
    'toolbarTitle': 'Profile Description',
            "headerImage": "assets/imgs/background/bannerProfile.png",
            "image": '',
            "title": '',
            "subtitle": '',
            "category": "populary",
            "followers": "Total Transaction",
            "valueFollowers": 0,
            "posts": "ID Number",
            "valuePosts": "",
            "items": [
                {
                    "id": 1,
                    "iconPhone": "call",
                    "iconMail": "mail-open",
                    "iconGlobe": "globe",
                    "phone": '+63(2)929-9597',
                    "mail": 'info@bfar.da.gov.ph',
                    "globe": "https://www.bfar.da.gov.ph/",
                    "content": "Content",
                    "subtitle": "The Bureau of Fisheries and Aquatic Resources (BFAR) is the government agency responsible for the development, improvement, management and conservation of the country's fisheries and aquatic resources. It was reconstituted as a line bureau by virtue of Republic Act No. 8550 (Philippine Fisheries Code of 1998). The bureau is under the Department of Agriculture.",
                    "title": "About",
                }
            ]
        }

  constructor( private userService : UserClassService, private alertCtrl: AlertController, private router: Router, private menuc: MenuController) { 
    if (this.userService.userId != null) {
      this.userService.setUpUser().then(() => {
      this.islogin = true;
      this.profile = this.userService.getMe();
      this.loadUser();
    });
    } else {
      this.menuc.close();
      console.log('No user found');
      this.presentAlert('You Are Not Login', 'Please Login Your Account')
      this.islogin = false;
    }
 
    
      
  }

  async presentAlert(header,message) {
    if (event) {
      event.stopPropagation();
    }
    const alert = await this.alertCtrl.create(
      {
        header: header, 
        message: message,
        cssClass: 'info-dialog',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
             this.router.navigate(['/login'])
            }
            
          },
          {
            text: 'Cancel',
            handler: () => {
              this.router.navigate(['/list'])
              this.menuc.close();
            }
            
          }
        ]
      });

    await alert.present();
  }

  ngOnInit() {
   
  }

  loadUser(){
    this.userService.getUserDetails(this.userService.userId).subscribe(details => {
      this.whitespace = " ";
      var userTypeTag = 'User Type: ';
      this.collection.title = details.Name.toString() + this.whitespace.toString() + details.Surname.toString();
      this.collection.subtitle = userTypeTag.toString() + details.UserType.toString();
      this.collection.valuePosts = details.UserID.toString();
      this.collection.image = "data:image/jpeg;base64,"+ details.Img;
      this.collection.valueFollowers = details.counter;
    } )

    this.data = this.collection;
  }
}
