import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import * as moment from 'moment';
import { RecordDataService } from '../services/record-data.service';
import { UserClassService } from '../services/user-class.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  dataholder;
  converteddate;
  fishnumber;

  isLogin = false;

  constructor(private recordService: RecordDataService, private UserService: UserClassService, private alertCtrl: AlertController, private menuctr: MenuController) {
    this.recordService.getRecords(this.UserService.userId).valueChanges().subscribe(data => {
      this.dataholder = data;
      this.converteddate =  moment(data['Date']).format("YYYY-MM-DD");
    })
   }


  ngOnInit() {
    if(this.UserService.userId == null){
      this.menuctr.close();
      this.presentAlert("No User Found", "Please Login To See History");
      this.isLogin = false;
    } else {
      this.isLogin = true;
    this.recordService.getRecords(this.UserService.userId).valueChanges().subscribe(data => {
      this.dataholder = data;
    })
    }
 
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
