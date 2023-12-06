import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RefresherEventDetail } from '@ionic/core';
import { Message } from '../services/data.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-home',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
})
export class FavoritosPage {
  favoriteMessages: Message[] = [];

  constructor(
    private router: Router,
    private schoolService: SchoolService
  ) {}

  ionViewWillEnter() {
    this.favoriteMessages = this.getMessages();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev.detail as RefresherEventDetail).complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.schoolService.getFavoriteMessages();
  }

  goBack() {
    this.router.navigate(['/home']); // Replace 'home' with the path to your home page component
  }
}
