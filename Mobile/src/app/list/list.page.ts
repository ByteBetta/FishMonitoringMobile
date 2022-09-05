import { Component, OnInit } from '@angular/core';
import { RecordDataService } from '../services/record-data.service';
import * as moment from "moment"; 
import { AlertController, MenuController } from '@ionic/angular';
import { LoadingService } from '../services/loading-service';
import { ConnectivityProviderService } from '../services/connectivity-provider.service';
import { User, UserClassService } from '../services/user-class.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { FishServiceService } from '../services/fish-service.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  profile: Observable<User>;
  uid: string;
  checkInterent: boolean

  private selectedItem: any;
  isEmpty = false;
  
  result: [];
  data = {
    "items": [
    ]
  }
  
  
  
  constructor(private recordService: RecordDataService, private alertCtrl: AlertController, private menuCtrl: MenuController,
    private loading: LoadingService, private connectivity: ConnectivityProviderService, private fishservice: FishServiceService,
     private Userservice: UserClassService, private router: Router, private storage: Storage
     ) {

      this.menuCtrl.enable(true);
      this.Userservice.setUpUser().then(() => {
        if (Userservice.userId !== undefined) {
          this.profile = Userservice.getMe();
          
        } else {
          console.log('No user found');
        }
      });

    this.loading.show();
    this.connectivity.appIsOnline$.subscribe(isOnline => {
      this.checkInterent = isOnline
      console.log('this.checkInterent', this.checkInterent)
  
      // checking internet connection
      if (this.checkInterent == true) {
        // show success alert if internet is working
        // alert('Internet is working.')
        console.log('Internet is working.')
      }
      else {
        // show danger alert if net internet not working
        // alert('Internet is slow or not working.')
        console.log('Internet is slow or not working.')
      }
    });
  
    this.recordService.getStorage().then(async items => {
      this.result = items;
   })

    this.recordService.getStorage().then(async items => {
      console.log(items);
      if(await items && items.length > 0){
        for (let i = 0; i < items.length; i++) {
          const date = moment(items[i]['date']).format("YYYY-MM-DD");
          this.data['items'].push({'title' : items[i]['UID'], 'date':
           "Date: " + date, 'landingsite' : "Landing Site: " + items[i]["LandingSite"],
           "fisherman" : "Fisherman/Company: " + items[i]["Fisherman"],
           "boat" : "Boat: " + items[i]["Boat"], 
           "items" : items[i]["FishList"]
          
          })
          console.log(items[i])
          }
          this.isEmpty = false;
          this.loading.hide();
      } else {
          this.isEmpty = true;
          this.loading.hide();
      }
    
    })

    console.log(this.data)
  
    
  }

  addrecord(){
    this.router.navigate(["/record-fish"])
  }


  SendData(){ 
    console.log(this.checkInterent)
    console.log(this.Userservice.userId)
    this.process();
  }

  process(){
    if(this.checkInterent == true && this.Userservice.userId != null){
    console.log("Success")
    this.presentAlert('Warning','Once Your Data Has All the Transaction are irreversible', 'Success');

   } else if (this.checkInterent == false){
    this.presentAlert('Error','No Internet Connection Detected', '');
   }  else if (this.Userservice.userId == null){
    this.presentAlert('Error','Please Login First Before Sending', '');
   }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.reload();
    }, 2000);
  }

 reload(){
  this.data['items'] = [];
  this.menuCtrl.enable(true);
  this.Userservice.setUpUser().then(() => {
    if (this.Userservice.userId !== undefined) {
      this.profile = this.Userservice.getMe();
      
    } else {
      console.log('No user found');
    }
  });

this.loading.show();
this.connectivity.appIsOnline$.subscribe(isOnline => {
  this.checkInterent = isOnline
  console.log('this.checkInterent', this.checkInterent)

  // checking internet connection
  if (this.checkInterent == true) {
    // show success alert if internet is working
    // alert('Internet is working.')
    console.log('Internet is working.')
  }
  else {
    // show danger alert if net internet not working
    // alert('Internet is slow or not working.')
    console.log('Internet is slow or not working.')
  }
});

this.recordService.getStorage().then(async items => {
  this.result = items;
})

this.recordService.getStorage().then(async items => {
  console.log(items);
  if(await items && items.length > 0){
    for (let i = 0; i < items.length; i++) {
      const date = moment(items[i]['date']).format("YYYY-MM-DD");
      this.data['items'].push({'title' : items[i]['UID'], 'date':
       "Date: " + date, 'landingsite' : "Landing Site: " + items[i]["LandingSite"],
       "fisherman" : "Fisherman/Company: " + items[i]["Fisherman"],
       "boat" : "Boat: " + items[i]["Boat"], 
       "items" : items[i]["FishList"]
      
      })
      console.log(items[i])
      }
      this.isEmpty = false;
      this.loading.hide();
  } else {
      this.isEmpty = true;
      this.loading.hide();
  }

})

console.log(this.data)
 }
  async presentAlert(header,message, type) {
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
              if(type === 'Success'){
                this.loading.show();
                this.recordService.getStorage().then((data) => {
                  console.log(data.length)
                  for (let i = 0; i < data.length; i++) {
                    let count: number;
                    data[i].Added_By = this.Userservice.userId;
                    this.Userservice.counter(this.Userservice.userId);
                    this.recordService.AddDatatoFireStore(data[i],data[i]['UID'])
                    for(let l = 0; l < data[i]['FishList'].length; l++){
                        console.log(data[i]['FishList'][l])
                        this.recordService.AddFishDatatoFireStore(this.Userservice.userId,data[i]['FishList'][l]);
                    }
                    
                  }
                })
                this.recordService.removeStorage();
                this.loading.hide();
                this.data = {
                  "items": [
                  ]
                }
              } else {
                this.loading.fakeLoad();
              }
            }
          }
        ]
      });

    await alert.present();
  }

  ngOnInit() {

    this.connectivity.appIsOnline$.subscribe(isOnline => {
      this.checkInterent = isOnline
    });
    this.Userservice.getSyncOpenedStatus().then(data => {
      if (data === true) {

        
       } else {
         this.presentAlertA('New User','New install Detected, Press OK to sync data for offline features.', "Load")
       }
   }); 
  }
   
async presentAlertA(header,message, otherfunction) {
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
              this.loading.fakeLoad();
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
        this.fishservice.setLocal(this.fishservice.getFishList());
       
        this.Userservice.setSyncOpen();
      }
      else {
        // show danger alert if net internet not working
        // alert('Internet is slow or not working.')
        console.log('Internet is slow or not working.')
        this.presentAlert('Internet is slow or not working.', 'Please Try Again', '')

      }
  
  }

  onDelete(params): void{
    
    this.ondelete("Delete Record", "Are you sure do you want to delete this?", params)

  }

  async ondelete(header,message, params) {
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
              let dataholder = params['title'];
              let index = this.result.findIndex(x => x["UID"] === dataholder)
              console.log(this.result);
              this.recordService.getStorage().then(async items => {
                items.splice(index, 1);   // i don't know what is index refer to
                this.recordService.updatestorage(items);
             })
             this.reload();
            }
          }
        ]
      });
  
    await alert.present();
  }

   onUpdate(params){

       this.onupdate('Update','Are you sure you want to update this?', params)
  
        
  }

  async onupdate(header,message, params) {
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
              
              let dataholder = params['title'];
              let index = this.result.findIndex(x => x["UID"] === dataholder)
              console.log(this.result[index]);
              this.recordService.getStorage().then(async items => {
                items.splice(index, 1);   // i don't know what is index refer to
                this.recordService.updatestorage(items);
             })
              this.router.navigate(['/edit'])
              this.recordService.settobeedited(this.result[index]);
            }
          },
          {
            text: 'Cancel',
            handler: () => {
              console.log(params)
            }
          }
        ]
      });
  
    await alert.present();
  }
  
  
}
   
  
  

  
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
