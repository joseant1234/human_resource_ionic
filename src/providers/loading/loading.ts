import { Injectable } from '@angular/core';

import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {
  private loading : any = {};

  constructor(private loadingCtrl : LoadingController) {}
  
  presentLoadingCustom() {
   	this.loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: `Cargando. Espere por favor`,
    });
    this.loading.present();
  }

  dismiss(){
    this.loading.dismiss();
  }




}
