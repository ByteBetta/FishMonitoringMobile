import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListViewGoogleCardsService } from './../services/list-view-google-card-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FishData, FishServiceService } from '../services/fish-service.service';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';



@Component({
  selector: 'app-google-card',
  templateUrl: './google-card.page.html',
  styleUrls: ['./google-card.page.scss'],
  providers: [ListViewGoogleCardsService]
})
export class GoogleCardPage implements OnInit {

  jsondata: string;
  data = {};
  numTimesLeft = 5;  
  searchTerm = '';

  private fishlist: Observable<FishData[]>

  
  count: number = 0;

  constructor(
    private service: ListViewGoogleCardsService, 
    public http: HttpClient,
    private file: File,
    private FishService: FishServiceService,
    private nativeHTTP: HTTP,
      ) { 

    
   

    

    this.data = { 
    "items": [  
    ]
    
  };

  }

 

  ngOnInit() {
    
  }

  SyncDataFishDatabase(){
    this.fishlist = this.FishService.getFishList();
    this.FishService.setLocal(this.fishlist);
  }

  SyncFishermanList(){
    this.FishService.setLocalFisherman(this.FishService.getFisherman());
  }

  SyncAllData(){
   
  }








  
  onItemClick(params): void {
   
    
    /* let results = [];
    this.getLocalData().subscribe((data : any[]) => {
      for (var i = 0; i < data.length; i++){
        // look for the entry with a matching `code` value
        if (data[i].ShortDescription == params['title'].toString()){
           // we found it
          // obj[i].name is the matched result
          results.push(data[i])
          console.log('onItemClick' , results)
        }
      }
    });
  */
    
  }

  

 

}
