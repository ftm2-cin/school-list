import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, NavController } from '@ionic/angular'; // Import NavController
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
})
export class FavoritosPage {
  private data = inject(DataService);
  constructor(private navCtrl: NavController) {} // Inject NavController here

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  goBack() {
    this.navCtrl.back();
  }
}
