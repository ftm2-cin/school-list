import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  router = inject(Router);

  goToPage(page: string) {
    switch (page) {
      case 'home':
        // Navigate to the Home page
        this.router.navigate(['/home']);
        break;
      case 'favorites':
        // Navigate to the Favorites page
        this.router.navigate(['/favoritos']);
        break;
      // Add more cases for additional pages if needed
    }
  }
  
}
