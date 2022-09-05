import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectService } from '../services/select-service';
import { Record, RecordDataService } from '../services/record-data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingService } from '../services/loading-service';
import { FishServiceService } from '../services/fish-service.service';
import * as moment from 'moment';


@Component({
  selector: 'app-record-fish',
  templateUrl: './record-fish.page.html',
  styleUrls: ['./record-fish.page.scss'],
})
export class RecordFishPage implements OnInit {

  RecordData : Observable<Record>
  // Select
  lsiteData = {};
  fisherman = {};
  boat = {};
  gearUsed = {};
  currentFish = {"items": []}
  currentSelected = this.recordservice.fullfishDetails;

  form : FormGroup;
  fishform: FormGroup;
  idgenerate = this.recordservice.generateUniqueID();
  //Text
  dateData = "";
  fishermanTxt = "";
  VesselTxt = ""
  // Selected Item
  slsiteData = "";
  sgearused = "";
  NBoxesTxt = "";
  TWeightBoxesTxt = "";
  FishWeigth = "";
  FishLength = "";
  NSBoxesTxt = ""
  TSWeightBoxesTxt = "";

  fishlish = [];
  finalData = [];

  step = 1;
  isSubmitted = false;
  isFishSubmitted = false;
  segmentValue = "Shortdescription";
  dateholder = ""
  datasavedinlocal: any;
  preselecttextgear = {};
  preselecttextsite = {};

  
  constructor(
    private router: Router, 
    private recordservice: RecordDataService, 
    private activatedRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private alertCtrl: AlertController,
    private loading: LoadingService,
    private fishservice: FishServiceService
    ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if(params["Type"] === "Vessels"){
        this.VesselTxt = params["data"]
      }
      if (params["Type"] === "Fisherman"){
        this.fishermanTxt = params["data"]
      }
    });

    this.lsiteData = {            
      'headerTitle': 'Single Select',
      'title': 'Landing Site',
      'header': 'One touch dialog',
      'selectedItem': this.preselecttextsite.toString(),
      'items': [
    ]
  }
 

  this.gearUsed = {
    'title': 'Gear Used',
    'selectedItem': this.preselecttextgear.toString(),
    'items': [
      
  ]
  }
  this.recordservice.setlandingsite();
  this.recordservice.setgearslocal();

  this.recordservice.getlocallandingsite().then(data =>{
    console.log(data)
    console.log(data.length)
    for(var i = 0; i < data.length; i++){
      this.lsiteData['items'].push({'id' : data[i]["landingSiteID"], 'title' : data[i]['title']});
      this.preselecttextsite = { "selectedItem" : data[0]['title']};
      this.lsiteData = Object.assign(this.lsiteData, this.preselecttextsite)
      this.slsiteData = data[0]['title'];
    }
  })

  this.recordservice.getlocalgear().then(data => {
    for(var i = 0; i < data.length; i++){
    this.gearUsed['items'].push({'id' : data[i]["gearID"], 'title' : data[i]['title']});
    this.preselecttextgear = { "selectedItem" : data[0]['title']};
    this.gearUsed = Object.assign(this.gearUsed, this.preselecttextgear)
      this.sgearused = data[0]['title'];
    }
  })
}

  ngOnInit() {

    //this.sgearused = this.preselecttextgear;
    this.form = this.formBuilder.group({
      Date : new FormControl('', Validators.compose([
          Validators.required
      ])),        
      fisherman : new FormControl('', Validators.compose([
           Validators.required
      ])),
      Vessel : new FormControl('', Validators.compose([
        Validators.required
      ])),              
      numberbox : new FormControl('', Validators.compose([
          Validators.required
      ])),
      kilobox : new FormControl('', Validators.compose([
        Validators.required
      ])),        
      samplebox : new FormControl('', Validators.compose([
          Validators.required
      ])),
      samplekilo : new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.fishform = this.formBuilder.group({ 
    length : new FormControl('', Validators.compose([
        Validators.required
    ])),        
    weight : new FormControl('', Validators.compose([
         Validators.required
    ])),

    });
    
  }

  get errorControl() {
    return this.form.controls;
  }

  get fisherror() {
    return this.fishform.controls;
  }


  ionViewDidLoad(){
    console.log(this.recordservice.getFishDetails()[0]) 
  }

  nextStep(){
    this.isSubmitted = true;
    console.log(this.form.controls.errors);
    if(this.step == 1){
    let me = this;    
        if(me.form.valid){
          this.loading.show();
          this.step++;
          this.loading.hide();
        } else {
          this.presentAlert('Invalid Input', 'Please Complete the Form')
        }    
    } else if (this.step == 2){

    }
    
  }

  onChangeGearUsed(params) : void{
    this.sgearused = params["selectedItem"].toString();
    console.log(this.sgearused)
  }

  onChangeLsiteData (params) : void{
    console.log(params)
    this.slsiteData = params["selectedItem"].toString();
  }

  segmentChanged(e){
    console.log(this.currentSelected.items);
    this.segmentValue = e.detail.value;
  }

  async finalsubmit(){
    this.loading.show();
    this.datasavedinlocal = await {"UID": this.idgenerate ,"Date": this.dateData, "LandingSite" : this.slsiteData, "Boat" : this.VesselTxt,
    "GearUsed": this.sgearused, "Fisherman" : this.fishermanTxt,
    "NumberofBoxes": this.NBoxesTxt, "TotalWeight": this.TWeightBoxesTxt, "FishList": this.fishlish, "NumberofBoxesSample" : this.NSBoxesTxt,
     "TotalSampleWeight": this.TSWeightBoxesTxt
   }
    this.recordservice.setStorage(this.datasavedinlocal);
    this.recordservice.fullfishDetails = { "items": []};
    this.currentFish['items'] = [];
    this.fishlish = [];
    this.currentSelected['items'] = [];
    this.step = 1;
    this.idgenerate = this.recordservice.generateUniqueID();
    this.NBoxesTxt = "";
    this.TWeightBoxesTxt = "";
    this.NSBoxesTxt = ""
    this.TSWeightBoxesTxt = "";
    this.fishermanTxt = "";
    this.VesselTxt = "";
    this.isSubmitted = false;
    this.loading.hide();
    await this.router.navigate(['/list'])
  }


  numericOnly(event): boolean {
      let pattern = /^[0-9]*\.?[0-9]*$/;
      let result = pattern.test(event.key);
      return result;
  }
 
  numbericDecimal(event): boolean {
    let pattern = /^[0-9]*\.?[0-9]*$/;
    let result = pattern.test(event.key);
    return result;
    }

  SelectSpecies() {
    this.router.navigate(['/search-fish']);
  }

  SelectFisherman () {
    this.router.navigate(['/list-item'], {
      queryParams: {"data" : 'Fisherman', "type": 'new' }
    });
  }

  SelectVessel(){
    this.router.navigate(['/list-item'], {
      queryParams: {"data" : 'Vessels', "type": 'new' }
    });
  }

  submit() {
    this.loading.show();
    this.finalData = [];
    this.dateholder =  moment(this.dateData).format("YYYY-MM-DD");
    this.finalData.push({"UID": this.idgenerate ,"Date": this.dateData, "LandingSite" : this.slsiteData, "Boat" : this.VesselTxt,
     "GearUsed": this.sgearused, "Fisherman" : this.fishermanTxt,
     "NumberofBoxes": this.NBoxesTxt, "TotalWeight": this.TWeightBoxesTxt, "FishList": this.fishlish, "NumberofBoxesSample" : this.NSBoxesTxt,
      "TotalSampleWeight": this.TSWeightBoxesTxt
    })
    this.step = 3;
    this.loading.hide();
    console.log(this.finalData);
    /*
   
    
    
    */
    
  }


  edit(){
    this.step = 1;
    this.activatedRoute.queryParams.subscribe(params => {
      if(params["Type"] === "Vessels"){
        this.VesselTxt = params["data"]
      }
      if (params["Type"] === "Fisherman"){
        this.fishermanTxt = params["data"]
      }
    });
  }

  add() {
    this.isFishSubmitted = true;
    if(this.recordservice.getCurrentFishSelected()['items'].length != 0 ){
      if(this.fishform.valid){
        this.loading.show();
        this.fishlish.push({"Species" : this.recordservice.getCurrentFishSelected()['items'][0], 
        "Weight" : this.FishWeigth, "Length" : this.FishLength, 
        'image': this.recordservice.getCurrentFishSelected()['items'][1],
         "vessels" : this.VesselTxt, "fisherman" : this.fishermanTxt, 
         "added_date" : this.dateData, "transno": this.idgenerate, "gearUsed" : this.sgearused, "landingSite": this.slsiteData
      })
        this.currentFish['items'].push({'title' : this.recordservice.getCurrentFishSelected()['items'][0], 'subtitle': "Weight: " + this.FishWeigth, 'Length': "Length: " + this.FishLength, 'image': this.recordservice.getCurrentFishSelected()['items'][1]})
        this.FishWeigth = "";
        this.FishLength = "";
        this.isFishSubmitted = false;
        this.loading.hide();
      } else {
        this.presentAlert('Invalid Input', 'Please Complete the Form')
      }
  } else {
    this.presentAlert('Empty Species', 'Please Select a Fish')
  }
  }

  onItemClick(params): void {
    console.log(this.recordservice.fullfishDetails['items']);
  }

  onDelete(params): void{
    this.loading.show();
    console.log(this.fishlish.indexOf(params));
    const index = this.currentFish['items'].indexOf(params);
    if (index > -1) {
      this.currentFish['items'].splice(index, 1);
      this.fishlish.splice(index, 1);
    }
    this.loading.hide();
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
