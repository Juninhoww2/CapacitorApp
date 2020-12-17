import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      
      const { role, data } = await loading.onDidDimiss();
        console.log('Loading dimissed!');
      }

      async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: null,
          duration: 5000,
          message: 'Click the backdrop to dimiss early...',
          translucent: true,
          cssClass: 'custom-class custom-loading',
          backdropDimiss: true
        });

        await loading.present();

        const { role, data } = await loading.onDidDimiss();
        console.log('Loading dimissed with role:', role);
      }
  }
