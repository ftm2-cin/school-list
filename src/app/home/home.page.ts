import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, School } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  searchQuery: string = '';
  schools: School[] = [];
  filteredSchools: School[] = [];

  constructor(
    private menu: MenuController,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getSchools().subscribe((schools) => {
      this.schools = schools;
      this.filteredSchools = schools;
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getSchools(): School[] {
    return this.filteredSchools;
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
    }
  }

  onSearchInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.searchQuery = inputValue;

    this.filteredSchools = this.schools.filter((school) => {
      const searchableContent = `${school.noEntidade.toLowerCase()} ${school.coEntidade}`;
      return searchableContent.includes(inputValue);
    });
  }
}
