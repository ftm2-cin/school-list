import { Component, Input, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { School } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './school.component.html', 
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
  @Input() school?: School;
  isFavorite: boolean = false;

  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
    if (this.school) {
      this.isFavorite = this.schoolService.getFavoriteSchools().some(scl => scl.coEntidade === this.school?.coEntidade);
    }
  }
  
  toggleFavorite() {
    if (this.school) {
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        this.schoolService.addFavorite(this.school);
      } else {
        this.schoolService.removeFavorite(this.school.coEntidade);
      }
    }
  }
}
