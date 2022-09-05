import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
   // public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform


  ) { }

  async getToken(){
    let token;
    
    if (this.platform.is('android')){
     //   token = await this.firebaseNative.getToken()
    }

    if (this.platform.is('ios')){
    //  token = await this.firebaseNative.getToken()
    //  await this.firebaseNative.grantPermission();
    }
    if (this.platform.is('cordova')){
      
    }

    return this.saveTokentoFirestore(token);
  }
  saveTokentoFirestore(token) {
    if (!token) return;

    const deviceref = this.afs.collection('device')

    const docData = {
      token,
      userId: 'test',
    }

    return deviceref.doc(token).set(docData);
  }

  listToNotifications(){
   // return this.firebaseNative.onNotificationOpen();
  }


}
