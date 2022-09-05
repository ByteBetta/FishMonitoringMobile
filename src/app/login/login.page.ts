import { Component, OnInit } from '@angular/core';

import { AlertController, MenuController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from 'src/app/services/login-service';
import { ToastService } from 'src/app/services/toast-service';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { LoginLayout1Page } from '../components/login-page/login-layout-1/login-layout-1.page';
import { Router } from '@angular/router';
import { User, UserClassService } from '../services/user-class.service';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FishServiceService } from '../services/fish-service.service';
import { LoadingService } from '../services/loading-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginService]
})
export class LoginPage implements OnInit {

  data = {};
  type: string;
  ref = firebase.database().ref('/Test/');
  
  private Users: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
        private service: LoginService,
        private toastCtrl: ToastService,
        private route: ActivatedRoute,
        private router: Router,
        private firebaseDB: AngularFireDatabase,
        private alertCtrl: AlertController,
        public UserService: UserClassService,
        private afAuth: AngularFireAuth,
        private firestoreDB: AngularFirestore,
        public menuCtrl: MenuController,
        private FishService: FishServiceService,
        private LoadingService: LoadingService
        ) 
        {
        this.menuCtrl.enable(false);
        this.data = this.service.getDataForLayout2();
        this.FishService.setFishDatabase();
        this.UserService.logout();
    }



  ngOnInit() {
    
  }

  async presentAlert(header,message) {
    if (event) {
      event.stopPropagation();
    }
    const alert = await this.alertCtrl.create(
      {
        header: header, 
        message: message,
        cssClass: 'alert-warning',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok clicked');
            }
          }
        ]
      });

    await alert.present();
  }

  onLogin(params): void {
    this.LoadingService.fakeLoad();
    this.checkLogin(params['username'],params['password']);
    
  }

  onOfflineMode(params): void {
    this.LoadingService.fakeLoad();
    this.router.navigate(['/list']);
  }

  nextpage() {
    this.router.navigate(['/list']);
  }

   userInfo:Promise<any[]>;
   
   async checkLogin(username: string,password: string){
    this.ref.orderByChild("UserName").equalTo(username.toString()).on("value", function(snapshot){
      if(snapshot.exists()){
         snapshot.forEach(valuelist => {
           if(password == valuelist.val().Password){
             this.nextpage();
             this.userInfo = valuelist.val();
             this.UserService.userId = valuelist.val().UserID;
             this.UserService.setUser(this.userInfo);
           } else {
            this.presentAlert('Incorrect Password', 'Please check your password and try again');
           }
         })
      }else{ 
        this.presentAlert('Incorrect Username', 'Please check your username and try again');
      }
    }.bind(this))
  }

 
  getDetails(){
    
  }
  



}

