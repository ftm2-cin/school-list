import { Component, Input } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message?: Message;
  isFavorite: boolean = false;

  constructor(private schoolService: SchoolService) {
    this.isFavorite = this.schoolService.getFavoriteMessages().some(msg => msg.id === this.message?.id);
  }

  toggleFavorite() {
    if (this.message) {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        this.schoolService.addFavorite(this.message);
      } else {
        this.schoolService.removeFavorite(this.message.id);
      }
    }
  }
}
