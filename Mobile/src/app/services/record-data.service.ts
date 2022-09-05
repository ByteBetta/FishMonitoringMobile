import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { UserClassService } from './user-class.service';

export interface Record {
  UserID: string;
  Added_By: string;
  Added_Date: string;
  LandingSite: string;
  Fisherman: string;
  Boat: string;
  GearUsed: string;
  NoBoxes: string;
  totalWeight: string;
  FishData: [{
  }]
}

export interface FishData {
  transId: string;
  UserID: string;
  Added_By: string;
  Added_Date: string;
  Length: string;
  Size: string;
  Species: string;
}

export interface gear {
  gearId : string;
  title: string;
}

export interface landingsite {
  landingsiteId : string;
  title: string;
}


@Injectable({
  providedIn: 'root'
})


export class RecordDataService {
  public tobeedit: any;
  public static RecordTag = 'RecordList';
  public static gearlist = 'gearlist';
  public static landingsitelist = 'landingsite';
  FishsCollectionRef: AngularFirestoreCollection<FishData> 
  RecordsCollectionRef: AngularFirestoreCollection<Record> 
  CurrentFishSelected = {
    "items": []
  }
  fishDetails = [];
  fullfishDetails = { "items": []};

  constructor(private storage: Storage, private afs: AngularFirestore, private router: Router,private Userservice: UserClassService) {
    this.RecordsCollectionRef = this.afs.collection('/records/'); 
    this.FishsCollectionRef = this.afs.collection('/fishdata/');
    this.storage.ready().then(forage => {
      //
    });  
   }

   setCurrentFishSelected(FishDetails, FishImage){
    this.CurrentFishSelected['items'] = [];
      this.CurrentFishSelected['items'].push(FishDetails);
      this.CurrentFishSelected['items'].push(FishImage);
   }

   getCurrentFishSelected(){
    return this.CurrentFishSelected;
   }

   settobeedited(dataedit){
      this.tobeedit = dataedit;
   }

   gettobeedited(){
     return this.tobeedit;
   }


  setStorage(val){
   
    this.storage.get(RecordDataService.RecordTag).then((list) => {

      if(list)
			{
				list.push(val);
        this.storage.set(RecordDataService.RecordTag, list);
        
			}
			else
			{
        let list = [];
        list.push(val);
        this.storage.set(RecordDataService.RecordTag, list)
        
      }
    })
  }

  updateData(val){ 
    this.storage.get(RecordDataService.RecordTag).then((list) => {
      
      if(list)
			{
				list.push(val);
        this.storage.set(RecordDataService.RecordTag, list);
        
			}
			else
			{
        let list = [];
        list.push(val);
        this.storage.set(RecordDataService.RecordTag, list)
        
      }
    })
  }


  getStorage (){
    return this.storage.get(RecordDataService.RecordTag)
  }

  AddDatatoFireStore(Record: Record, UserID){
    this.RecordsCollectionRef.doc(UserID).set(Record);
  }

  AddFishDatatoFireStore(UserID, Fish: FishData){
    this.FishsCollectionRef.add(Fish);
  }

  generateUniqueID(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  setFishDetails(Details){
    this.fishDetails.push(Details);
  }

  getFishDetails(){
    return this.fishDetails;
  }

  removeStorage(){
    this.storage.remove(RecordDataService.RecordTag);
  }

  getRecords(userId) {
    return this.afs.collection('records', ref =>
    ref.where('Added_By', '==', userId));
  }

  getgears(): Observable<gear[]> {
    return this.afs.collection<gear>(`gearList`).valueChanges();
  } 

  getLandingSite(): Observable<landingsite[]> {
    return this.afs.collection<landingsite>(`landingSite`).valueChanges();
  }

  setgearslocal(){
    this.getgears().subscribe(data => { 
      this.storage.set(RecordDataService.gearlist, data);
    })
    
  }

  setlandingsite(){
    this.getLandingSite().subscribe(data => {  
    this.storage.set(RecordDataService.landingsitelist, data);
  })
  }

  getlocalgear(){
    return this.storage.get(RecordDataService.gearlist);
  }

  getlocallandingsite(){
    return this.storage.get(RecordDataService.landingsitelist);
  }

  updatestorage(data){
    this.storage.set(RecordDataService.RecordTag, data);
  }

  deleterecords(){
    this.storage.remove(RecordDataService.RecordTag)
  }

  




 
   
}
