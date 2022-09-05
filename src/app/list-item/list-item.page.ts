import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fisherman, FishServiceService } from '../services/fish-service.service';
import { RecordDataService } from '../services/record-data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {

  data = {"items": []};

  fishermanlist: any
  dataholder : any;
  count: number = 0;

  type: string;

  typeinput: string;
  constructor(
    private fishservice: FishServiceService,
    private recordservice: RecordDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
     this.type = params['data']
    this.typeinput = params['type']
    this.fishermanlist = this.fishservice.getLocalFisherman();
    this.dataholder = this.fishermanlist
    for (let i = 0; i < 5; i++) {
      this.dataholder.then(data => {
          // this is the most confusing thing i have ever done
          if(params["data"] === 'Vessels'){
            for (let l = 0; l < data[this.count]['Vessels'].length; l++){
              this.data['items'].push({'title' : data[this.count]['Vessels'][l], 'button': 'Select', "avatar": "assets/imgs/avatar/vessel.jpg"})
            }
          } else {
            this.data['items'].push({'title' : data[this.count]['name'], 'subtitle' : 'Contact: ' + 
            data[this.count]['contact'], 'button': 'Select', "avatar": "assets/imgs/avatar/fisherman.png"})
          }
          
          
        
        
        this.count++; 
        
    })
  }

    });
  this.data = {"items": []};
  }

  onItemClick(params) : void {
    if(this.typeinput === 'new'){

    if(this.type === 'Vessels')
    this.router.navigate(['/record-fish'], {
      queryParams: {"data" : params['title'], "Type": "Vessels" }
    });
    else {
      this.router.navigate(['/record-fish'], {
        queryParams: {"data" : params['title'], "Type": "Fisherman" }
      });
    }
  } else {
    if(this.type === 'Vessels')
    this.router.navigate(['/edit'], {
      queryParams: {"data" : params['title'], "Type": "Vessels" }
    });
    else {
      this.router.navigate(['/edit'], {
        queryParams: {"data" : params['title'], "Type": "Fisherman" }
      });
    }
  }
}

}
