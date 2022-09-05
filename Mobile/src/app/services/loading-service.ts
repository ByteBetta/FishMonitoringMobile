import { AlertController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  isLoading = false;
  
  constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  async show() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Please Wait',
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });


  }



  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  async fakeLoad() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
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
            }
          }
        ]
      });

    await alert.present();
  }
}
