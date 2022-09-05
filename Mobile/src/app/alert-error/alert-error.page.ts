import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert-service';
import { ToastService } from '../services/toast-service';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.page.html',
  styleUrls: ['./alert-error.page.scss'],
})
export class AlertErrorPage implements OnInit {

  data = {};

  constructor(public navCtrl: NavController,
    private service: AlertService,
    private toastCtrl: ToastService) { 
      this.data = this.service.getDataForLayout2();

    }

  ngOnInit() {
  }

}
