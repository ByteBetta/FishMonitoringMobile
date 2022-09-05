import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Platform, ToastController } from '@ionic/angular';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConnectivityProviderService } from '../services/connectivity-provider.service';
import { FcmService } from '../services/fcm.service';
import { FishServiceService } from '../services/fish-service.service';
import { LoadingService } from '../services/loading-service';
import { User, UserClassService } from '../services/user-class.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile: Observable<User>;
  uid: string;
  checkInterent: boolean

  constructor(
    public Userservice : UserClassService, 
    public menuCtrl: MenuController, 
    public platform: Platform, 
    public fcm: FCM, 
    public router: Router,
    private LoadingService: LoadingService,
    private fishService: FishServiceService,
    private alertCtrl: AlertController,
    private connectivity: ConnectivityProviderService
    ) 
    {

    // Setting Up User
    this.menuCtrl.enable(true);
    this.Userservice.setUpUser().then(() => {
      if (Userservice.userId !== undefined) {
        this.profile = Userservice.getMe();
        
      } else {
        console.log('No user found');
      }
    });
   
    
    this.platform.ready().then(()=> {
      if(this.platform.is('android')){
      this.fcm.getToken().then(async token => {
        this.Userservice.saveTokenToFirestore(await this.Userservice.getUser(),token)
        console.log('get token success', token);
        
      });

  
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log('user', token)
      })
      
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if(data.wasTapped){
          console.log('Background Received');
          this.router.navigate(['home']);
        }else {
          console.log('Foreground Recieved')
          this.router.navigate(['home']);
        }
  
      })

    }
    if(this.platform.is('cordova')){
      console.log('This is Cordova');
    }
    })
   
}
  ngOnInit() {
    this.connectivity.appIsOnline$.subscribe(isOnline => {
      this.checkInterent = isOnline
    });
    this.Userservice.getSyncOpenedStatus().then(data => {
      if (data === true) {

        
       } else {
         this.presentAlert('New User','New install Detected, Press OK to sync data for offline features.', "Load")
       }
   }); 
  }

  ionViewDidLoad(){
    this.menuCtrl.enable(true);
}

async presentAlert(header,message, otherfunction) {
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
            console.log(otherfunction === "Load")
            if (otherfunction === "Load") {
              this.test();
            } else {
              this.LoadingService.fakeLoad();
            }
          }
        }
      ]
    });

  await alert.present();
}


  
  test(){
      console.log('this.checkInterent', this.checkInterent)
      // checking internet connection
      if (this.checkInterent == true) {
        // show success alert if internet is working
        // alert('Internet is working.')
        console.log('Internet is working.')
        this.fishService.setLocal(this.fishService.getFishList());
        this.fishService.setLocalFisherman(this.fishService.getFisherman());
        this.Userservice.setSyncOpen();
      }
      else {
        // show danger alert if net internet not working
        // alert('Internet is slow or not working.')
        console.log('Internet is slow or not working.')
        this.presentAlert('Internet is slow or not working.', 'Please Try Again', '')

      }
  
  }
  
}

