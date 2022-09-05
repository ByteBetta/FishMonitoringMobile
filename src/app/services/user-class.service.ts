import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';
import { firestore } from 'firebase/app';

export interface User {
  UserID: string;
  Added_By: string;
  Added_Date: string;
  Gender: string;
  Img: string;
  Name: string;
  Password: string;
  Surname: string;
  UserName: string;
  UserType: string;
  counter: number
}

@Injectable({
  providedIn: 'root'
})
export class UserClassService {
  private static USER = '/Users/';
  private static FirstOpened = 'ApplicationFirstOpened';
  private static userTag = 'BFARENUMERATOR';
  private doc: AngularFirestoreDocument<User>;
  private  userProfileCollection: AngularFirestoreCollection<User>;
  public userId: string;
  public static sync = 'DownloadFirstOpen';
  public static theme = "UserPrefTheme";
  
  


  constructor(
    private fireStore: AngularFirestore,
    private storage : Storage,
    private navCtrl: NavController,
    private alertCtrl: AlertController
    ) {
    this.userProfileCollection = this.fireStore.collection(UserClassService.USER);
    this.setUpUser();
    this.storage.ready().then(forage => {
      //
    });  
  }

  private clearUser() {
    this.setUser(null);
  }

  setUser(user: User): void {
    this.storage.set(UserClassService.userTag, user);
  }
  
  getUser(): Promise<User> {
    return this.storage.get(UserClassService.userTag);
  }



  async setUpUser() {
    await this.getUser().then(data => {
      if (data !== undefined && data !== null) {
       // console.log('DB Service set up user', data);
      }
    });
  }

  
  getUserDetails(id):Observable<User> {
    this.doc = this.userProfileCollection.doc(id.toString());
    return this.doc.valueChanges();
  } 

  getMe(): Observable<User> {
    console.log('Get Me: ', this.userId);
    return this.getUserDetails(this.userId)
  }

  b64toBlob(b64Data: string, contentType= '', sliceSize= 512) {
    // const BASE64_MARKER = ';base64,';
    // const parts = b64Data.split(BASE64_MARKER);
    // const byteCharacters = atob(parts[1]);
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  logout(){
    this.clearUser();
    this.userId = null;
  }

  setFirstOpened(): void {
    this.storage.set(UserClassService.FirstOpened, true);
  }

  getFirstOpenedStatus(): Promise<any> {
    return this.storage.get(UserClassService.FirstOpened);
  }

  setSyncOpen(): void {
    this.storage.set(UserClassService.sync, true);
  }

  getSyncOpenedStatus(): Promise<any> {
    return this.storage.get(UserClassService.sync);
  }


  public saveTokenToFirestore(person: User, token) {
    if (!token) return;
    const devicesRef = this.fireStore.collection('devices')

    const docData = { 
      token,
      userId: person.UserID,
    }

    return devicesRef.doc(token).set(docData)
  }

  async counter(id){
    const counterRef = this.fireStore.collection("Users").doc(id.toString()).ref;
    counterRef.get().then((doc) => {
      if (doc.exists) {
        counterRef.update({
          counter: firestore.FieldValue.increment(1)
      })
      } else {
        counterRef.set({
          counter: 1
      })
      }
    })   
  }
  
  userpreference(status){
    this.storage.set(UserClassService.theme, status)
  }

  getUserpreference(){
    return this.storage.get(UserClassService.theme)
  }
}



