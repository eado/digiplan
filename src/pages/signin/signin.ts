import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController, App, LoadingController } from 'ionic-angular';
import { AuthService } from "../../app/auth.service";

import { HomePage } from '../home/home';

/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navParams: NavParams, private as: AuthService, public alertCtrl: AlertController, public appCtrl: App, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signin() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    loader.present();
    this.as.signin()
      .subscribe(
      () => {
        this.appCtrl.getRootNav().push(HomePage);
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err,
          buttons: ['Dismiss']
        });
        alert.present();
        loader.dismiss();
      }
      );
  }

}
