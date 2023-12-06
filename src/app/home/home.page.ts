import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RefresherCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private menu: MenuController,
    private router: Router,
    private data: DataService
  ) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  closeMenu() {
    this.menu.close();
  }

  goToPage(page: string) {
    switch (page) {
      case 'home':
        // Navigate to the Home page
        this.router.navigate(['/home']);
        this.menu.close();
        break;
      case 'favorites':
        // Navigate to the Favorites page
        this.router.navigate(['/favoritos']);
        this.menu.close();
        break;
      // Add more cases for additional pages if needed
    }
  }
}
