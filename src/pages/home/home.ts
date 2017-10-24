import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DayPage } from '../day/day';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openDay() {
    this.navCtrl.push(DayPage);
  }

  openSettings() {
    const modal = this.modalCtrl.create(SettingsPage);
    modal.present();
  }

}
