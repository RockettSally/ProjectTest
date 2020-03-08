import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itens = [];

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,
    private platform: Platform) {

  }

  adicionarItem() {
    this.navCtrl.push('AddItemPage');
  }

  quitApp() {
    let toast = this.toastCtrl.create({
      message: 'VOCÊ É GAY!',
      duration: 1000,
    });

    toast.present();

    toast.onDidDismiss(() => {
      this.platform.exitApp();
    })
  }
}
