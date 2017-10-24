import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../app/auth.service';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  email = ""
  name = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public auth: AuthService) {
    afAuth.auth.onAuthStateChanged(
      user => {
        this.name = user.displayName.replace('/\b\w/g', l => l.toUpperCase())
        this.email = user.email
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logout() {
    this.auth.logout();
    this.navCtrl.push(SigninPage);
  }

}
