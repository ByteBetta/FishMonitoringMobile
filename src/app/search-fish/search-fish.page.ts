import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FishData, FishServiceService } from '../services/fish-service.service';
import { SearchBarService } from '../services/search-bar-service';
import { SelectService } from '../services/select-service';
import { ToastService } from '../services/toast-service';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { LoadingService } from '../services/loading-service';
import { RecordDataService } from '../services/record-data.service';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-search-fish',
  templateUrl: './search-fish.page.html',
  styleUrls: ['./search-fish.page.scss'],
})
export class SearchFishPage implements OnInit {

  data = {}

  search = "";

  private fishlist: any

  count: number = 0;

  result : any;

  dataholder : any;

  option = {
    'title' : 'Search By:',
    'selectedItem': 'Short Description',
    'items': [
      {
          'title': 'Short Description',
      },
      {
          'title': 'Distribution'
      },
      {
          'title': 'Species'
      },
      {
          'title': 'Order'
      },
      {
           'title': 'Family'
      },
      {
          'title': 'Dorsal Spines'
      },
      {
          'title': 'Dorsal Soft Rays'
      },
      {
          'title': 'Anal Spines'
      },
      {
          'title': 'Anal Soft Rays'
      },
      
    ]
  }
  
  
  keyword = []
  onWordSearch =  "";
  isOnWordEnabled = false;
  searchTerm = ""

  constructor(
    private SearchBarService : SearchBarService,
    private FishService : FishServiceService,
    private toastCtrl: ToastService,
    private loader: LoadingController,
    private recordfish: RecordDataService,
    private router: Router,
    private alertCtrl: AlertController,
    private file: File
    ) {
      this.fishlist = this.FishService.getLocal();
      this.dataholder = this.fishlist;
      for (let i = 0; i < 5; i++) {
        this.dataholder.then(data => {
          let win: any = window;
          let url = data[this.count]['Species'].toString().replace(/\s/g, "");
          let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
            // this is the most confusing thing i have ever done
          this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' : 
          data[this.count]['FamilyName'] ,'image' : safeURL,  'shareIcon': 'add-circle', 'order' : data[this.count]['OrderName'],
          "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
          "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
          
          this.count++;
      })
    }

    this.data = { 
    "items": [
      
    ]
  };

  
   }

  

  ngOnInit() {
    this.keyword.push('ShortDescription');
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
     
      for (let i = 0; i < 5; i++) {
        if(this.search.length == 0){
        this.dataholder.then(data => {
          let win: any = window;
          let url = data[this.count]['Species'].toString().replace(/\s/g, "");
          let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
            // this is the most confusing thing i have ever done
          this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' : 
          data[this.count]['FamilyName'] ,'image' : safeURL, 'shareIcon': 'add-circle','order' : data[this.count]['OrderName'],
          "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
          "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
          
          this.count++;
        })  
      } else {
        this.dataholder.subscribe(data => {
          let win: any = window;
          let url = data[this.count]['Species'].toString().replace(/\s/g, "");
          let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
            // this is the most confusing thing i have ever done
          this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' :
          data[this.count]['FamilyName'] ,'image' : safeURL, 'shareIcon': 'add-circle', 'order' : data[this.count]['OrderName'],
          "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
          "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
          
          this.count++;
      })
    }
  }
      infiniteScroll.target.complete();
    }, 500);
  

  }

  onChange(params): void {
    this.keyword = [];
    this.keyword.push(params['selectedItem'].toString());

    if(this.keyword.includes('Short Description') || this.keyword.includes('Short Description ')){
      this.keyword.splice(0, 1,'ShortDescription')
      this.isOnWordEnabled = false;
    }

    if(this.keyword.includes('Distribution')  || this.keyword.includes('Distribution ')){
      this.keyword.splice(0, 1,'Distribution')
      this.isOnWordEnabled = false;
    }

    if(this.keyword.includes('Species')  || this.keyword.includes('Species ')){
      this.keyword.splice(0, 1,'Species')
      this.isOnWordEnabled = false;
    }

    if(this.keyword.includes('Order') || this.keyword.includes('Order ')){
      this.keyword.splice(0, 1,'OrderName')
      this.isOnWordEnabled = false;
    }

    if(this.keyword.includes('Family')  || this.keyword.includes('Family ')){
      this.keyword.splice(0, 1,'FamilyName')
      this.isOnWordEnabled = false;
    }

    if(this.keyword.includes('Dorsal Spines') || this.keyword.includes('Dorsal Spines ')){
      console.log("dspine")
      this.keyword.splice(0, 1,'ShortDescription')
      this.onWordSearch = 'Dorsal\n\t\t\t\tspines\n\t\t\t\t(total): '
      this.isOnWordEnabled = true;
    }

    if(this.keyword.includes('Dorsal Soft Rays') || this.keyword.includes('Dorsal Soft Rays ')){
      this.keyword.splice(0, 1,'ShortDescription')
      this.onWordSearch = '\n\t\t\t\t\tDorsal\n\t\t\t\t\tsoft rays\n\t\t\t\t\t(total): '
      this.isOnWordEnabled = true;
    }

    if(this.keyword.includes('Anal Spines') || this.keyword.includes('Anal Spines ') ){
      this.keyword.splice(0, 1,'ShortDescription')
      this.onWordSearch = '\n\t\t\t\tAnal\n\t\t\t\tspines: '
      this.isOnWordEnabled = true;
    }

    if(this.keyword.includes('Anal Soft Rays') || this.keyword.includes('Anal Soft Rays ') ){
      this.keyword.splice(0, 1,'ShortDescription')
      this.onWordSearch = '\n\t\t\t\t\tAnal\n\t\t\t\t\tsoft rays: '
      this.isOnWordEnabled = true;
    }

    console.log(params['selectedItem'])

}



onTextChangeFunc(params): void {
  //clear list
  this.data = {"items": [
  ]}
  this.count = 0;

  console.log(params)

  console.log(this.keyword);
  if(this.keyword.length != 0){
  if(params.toString().length > 0){
  this.fishlist.then(fishdata => {
  if(!this.isOnWordEnabled){
  this.dataholder = this.FishService.searchFilter(params, fishdata, this.keyword);
  for (let i = 0; i < 5; i++) {
    console.log("false word enabled")
    this.dataholder.subscribe(data => {
      let win: any = window;
          let url = data[this.count]['Species'].toString().replace(/\s/g, "");
          let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
            // this is the most confusing thing i have ever done
          this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' : 
          data[this.count]['FamilyName'] ,'image' : safeURL,  'shareIcon': 'add-circle', 'order' : data[this.count]['OrderName'],
          "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
          "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
          
          this.count++;
  });

  }
  } else if (this.isOnWordEnabled) {
    console.log("true enabled")
    console.log(this.onWordSearch)
    this.dataholder = this.FishService.searchFilter(this.onWordSearch + params.toString(), fishdata, this.keyword);

    for (let i = 0; i < 5; i++) {
      this.dataholder.subscribe(data => {
        let win: any = window;
        let url = data[this.count]['Species'].toString().replace(/\s/g, "");
        let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
          // this is the most confusing thing i have ever done
        this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' : 
        data[this.count]['FamilyName'] ,'image' : safeURL, 'shareIcon': 'add-circle', 'order' : data[this.count]['OrderName'],
        "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
        "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
        
        this.count++;
    }); 
  }

  }
  });
} else {
  console.log("empty")
  this.dataholder = this.fishlist;
  for (let i = 0; i < 5; i++) {
    this.dataholder.then(data => {
      let win: any = window;
          let url = data[this.count]['Species'].toString().replace(/\s/g, "");
          let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
            // this is the most confusing thing i have ever done
          this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' : 
          data[this.count]['FamilyName'] ,'image' : safeURL, 'shareIcon': 'add-circle', 'order' : data[this.count]['OrderName'],
          "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
          "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
          "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
          
          this.count++;
  }); 
}
}
  } else {
    console.log("first open")
    this.presentAlert('Warning','Please Select in Search By:')
    this.dataholder = this.fishlist;
    for (let i = 0; i < 5; i++) {
      this.dataholder.then(data => {
        let win: any = window;
        let url = data[this.count]['Species'].toString().replace(/\s/g, "");
        let safeURL = win.Ionic.WebView.convertFileSrc(this.file.dataDirectory+url);
          // this is the most confusing thing i have ever done
        this.data['items'].push({'title' : data[this.count]['Species'], 'subtitle' : 
        data[this.count]['FamilyName'] ,'image' : safeURL, 'shareIcon': 'add-circle', 'order' : data[this.count]['OrderName'],
        "group": [{'Description' : 'Short Description' , 'icon': 'icon-chevron-right', 
        "list": [{'details' : data[this.count]['ShortDescription']}]} , {'Description' : 'Distribution' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Distribution']}]}, {'Description' : 'Environment' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Environment']}]}, {'Description' : 'Biology' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Biology']}]}, {'Description' : 'Measurement' , 'icon': 'icon-chevron-right',
        "list": [{'details' : data[this.count]['Measurement']}]}  ] } );
        
        this.count++;
    });
  
    
  }
    
  }


}

  SyncData(){
    this.FishService.setLocal(this.FishService.getFishList());
  }


searchEventFired() {
  // you have the value here
  console.log(this.searchTerm)  
}

onItemClick(params): void {
  console.log(params);
  this.recordfish.fullfishDetails['items'] = [];
  this.recordfish.fullfishDetails['items'].push({'title' : params['title'], 'image': params['image'],
  'subtitle' : params['subtitle'], 'order' : params['order'], 'shortdescription' : params['group'][0]['list'][0]['details'],
  'distribution' : params['group'][1]['list'][0]['details'],'environment' : params['group'][2]['list'][0]['details'],
  'biology' : params['group'][3]['list'][0]['details'],'measurement' : params['group'][4]['list'][0]['details'],
  })
  this.recordfish.setCurrentFishSelected(params['title'], params['image']);
  this.router.navigate(['/record-fish']);
}

async presentAlert(header,message) {
  if (event) {
    event.stopPropagation();
  }
  const alert = await this.alertCtrl.create(
    {
      header: header, 
      message: message,
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
