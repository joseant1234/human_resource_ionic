import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

import { USERS } from '../../services/mocks/users';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user : any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, public loadingCtrl: LoadingController, public storage: Storage) {
  }

  ionViewDidLoad() {
  }

  login(){
    if(this.user.email && this.user.password){

      let loading = this.loadingCtrl.create({
        content: "please wait ..."
      });

      loading.present().then(()=>{
        // SERVICE TO LOGIN
        let user = USERS.find((el)=> el.email == this.user.email);
        if(user){
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
          this.storage.set('user_id',user.id)
        }else{
          let alert = this.alertCtrl.create({
            title: "Sign in",
            subTitle: "Email o contraseña incorrecta",
            buttons: ['Aceptar']
          });
          alert.present();
          loading.dismiss();
        }
      });
      
    }else{
      let alert = this.alertCtrl.create({
        title: "Sign in",
        subTitle: "Complete los campos",
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }

}
