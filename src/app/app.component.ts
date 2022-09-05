import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserClassService } from './services/user-class.service';
import { Router } from '@angular/router';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { FishServiceService } from './services/fish-service.service';
import { RecordDataService } from './services/record-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Records',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person-circle-outline'
    },
    {
      title: 'Search Fish',
      url: '/search-fish',
      icon: 'search-outline'
    },
    {
      title: 'Record Fish',
      url: '/record-fish',
      icon: 'clipboard-outline'
    },
    {
      title: 'Synchronization',
      url: '/google-card',
      icon: 'refresh-circle-outline'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'log-out-outline'
    },
    {
      title: 'Recent Send',
      url: '/history',
      icon: 'cloud-upload-outline'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out-outline'
    }
 
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private UserService: UserClassService,
    private router: Router,
    private fishService: FishServiceService,
    private  userService: UserClassService,
    private record: RecordDataService
    
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.record.setlandingsite();
      this.record.setgearslocal();
      document.body.classList.toggle('dark',  await this.userService.getUserpreference());
      
    
    });
  
    this.routeUser();

  }

  routeUser() {
    
    this.UserService.getFirstOpenedStatus().then(data => {
     if (data === true) {
        this.router.navigate(['/login']); 
        if(this.UserService.userId !== null){
          this.router.navigate(['/login']); 
        } else {
          this.router.navigate(['/list']);
        }
      } else {
        this.router.navigate(['/welcome']); 
        this.fishService.setFishDatabase();
      }
  }); 
   
} 

}
