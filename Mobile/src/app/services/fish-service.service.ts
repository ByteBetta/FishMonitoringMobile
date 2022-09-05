import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { from, Observable, of } from 'rxjs';
import { Base64 } from '@ionic-native/base64/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { LoadingService } from './loading-service';
import { AlertController, LoadingController } from '@ionic/angular';

export interface FishData {
    FishID : string;
    Species : string;
    ShortDescription : string;
    Biology : string;
    Measurement : string;
    OrderName : string;
    FamilyName : string;
    LocalName : string;
    Distribution : string;
    Environment : string;
    FishBaseName : string;
    Occurance : string;
    Img : string;
    OfflineImage: any;
}

export interface Fisherman {
    DealID: string
    Vessels: []
    address: string
    contact: string
    email: string
    name: string
    person: string
}



@Injectable({
  providedIn: 'root'
})
export class FishServiceService {

  private static FirstOpened = 'FishDatabase';
  private static testOffline = 'testOffline';
  private static fishermanList = 'FishermanList';


  constructor(
    public http: HttpClient, 
    private storage : Storage, 
    public firestore: AngularFirestore, 
    private base64: Base64,
    private file: File,
    private nativeHTTP: HTTP,
    private loading: LoadingService,
    private alertCtrl: AlertController,
    private loadingctrl: LoadingController
    ) { 
    this.storage.ready().then(forage => {
      //
    }); 
  }

  getFishList(): Observable<FishData[]> {
    return this.firestore.collection<FishData>(`FishList`).valueChanges();
  }

  getFisherman(): Observable<Fisherman[]> {
    return this.firestore.collection<Fisherman>(`Fisherman`).valueChanges();
  }

  setLocalFisherman(fishermanlist: Observable<Fisherman[]>){
    this.loading.show();
    fishermanlist.subscribe(data =>{
      this.storage.set(FishServiceService.fishermanList, data)
      this.loadingctrl.dismiss();
      this.loading.hide();
    }, err => {
      console.log('HTTP Error', err)
      this.loadingctrl.dismiss();
    })
    
  }

  setLocal(fishlist:  Observable<FishData[]>){
    this.loading.show();
    fishlist.subscribe(data => {
      for (var i=0 ; i < data.length ; i++)
      {
        this.downloadFileAndStore(data[i]['Img'], data[i]['Species'])
      }
    this.storage.set(FishServiceService.testOffline, data)
    this.loadingctrl.dismiss();
    this.loading.hide();
    this.presentAlert('Syncing Success', 'Success')
    this.loadingctrl.dismiss();
    this.loading.hide();
    }, err => {
      console.log('HTTP Error', err)
      this.loadingctrl.dismiss();
    });
   
  }

  getLocal(){
    return this.storage.get(FishServiceService.testOffline);
  }

  getLocalFisherman(){
    return this.storage.get(FishServiceService.fishermanList);
  }
  
  private downloadFileAndStore(url, filename) {
    const filePath = this.file.dataDirectory + filename.replace(/\s/g, ""); 
                     // for iOS use this.file.documentsDirectory
    this.nativeHTTP.downloadFile(url, {}, {}, filePath).then(response => {
       // prints 200
       console.log('success block...', response);
    }).catch(err => {
        // prints 403
        console.log('error block ... ', err.status);
        // prints Permission denied
        console.log('error block ... ', err.error);
    })
    
 }

  getLocalData() {
    return this.http.get("/assets/database/listjson.json");
  }

  setFishDatabase(){
    this.getLocalData().subscribe(data => {
    
    this.storage.set(FishServiceService.FirstOpened, data);
    });
  }

  getFishDatabase(){
    return this.storage.get(FishServiceService.FirstOpened);
  }

  searchFish(searchField, searchValue, obj, output){
    for (var i=0 ; i < obj.length ; i++)
    {
        if (obj[i][searchField] == searchValue) {
          output.push(obj[i]);
        }
    }
  }

   searchFilter(keyword, JSONDATA, searchField){
    if(keyword.length<1) // skip if input is empty
        return

    var results = []
    for(var i in JSONDATA){ // iterate through dataset
        for(var u=0;u<searchField.length;u++){ // iterate through each key in dataset

            var rel = this.getRelevance(JSONDATA[i][searchField[u]],keyword) // check if there are matches

            if(rel==0) // no matches...
                continue // ...skip

            results.push({relevance:rel,entry:JSONDATA[i]}) // matches found, add to results and store relevance
        }
    }

    results.sort(this.compareRelevance) // sort by relevance

    for(let i = 0; i<results.length;i++){
        results[i] = results[i].entry // remove relevance since it is no longer needed
    }

    return of(results)
}

 getRelevance(value,keyword){
    value = value.toLowerCase() // lowercase to make search not case sensitive
    keyword = keyword.toLowerCase()

    var index = value.indexOf(keyword) // index of the keyword
    var word_index = value.indexOf(' '+keyword) // index of the keyword if it is not on the first index, but a word

    if(index==0) // value starts with keyword (eg. for 'Dani California' -> searched 'Dan')
        return 3 // highest relevance
    else if(word_index!=-1) // value doesnt start with keyword, but has the same word somewhere else (eg. 'Dani California' -> searched 'Cali')
        return 2 // medium relevance
    else if(index!=-1) // value contains keyword somewhere (eg. 'Dani California' -> searched 'forn')
        return 1 // low relevance
    else
        return 0 // no matches, no relevance
}

 compareRelevance(a, b) {
  return b.relevance - a.relevance
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
}
