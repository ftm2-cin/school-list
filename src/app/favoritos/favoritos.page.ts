import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RefresherEventDetail } from '@ionic/core';
import { School } from '../services/data.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-home',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
})
export class FavoritosPage {
  favoriteSchools: School[] = [];

  constructor(
    private router: Router,
    private schoolService: SchoolService
  ) {}

  ionViewWillEnter() {
    this.favoriteSchools = this.getSchools();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev.detail as RefresherEventDetail).complete();
    }, 3000);
  }

  getSchools(): School[] {
    return this.schoolService.getFavoriteSchools();
  }

  toggleFavorite(message: any) {
    message.isFavorite = !message.isFavorite; // Toggle the favorite status
    if (message.isFavorite) {
      this.schoolService.addFavorite(message); // Add to favorites
    } else {
      this.schoolService.removeFavorite(message.id); // Remove from favorites
    }
  }
  
  goBack() {
    this.router.navigate(['/home']); // Replace 'home' with the path to your home page component
  }
}
