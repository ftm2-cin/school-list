import { Component, OnInit } from '@angular/core';
import { MenuController, IonInfiniteScroll } from '@ionic/angular';
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
  currentPage: number = 1;

  constructor(
    private menu: MenuController,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {
    this.loadSchools();
  }

  loadSchools() {
    this.data.getSchools().subscribe((schools) => {
      this.schools = [...this.schools, ...schools];
      this.filteredSchools = this.schools;
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

  loadData(event: any) {
    // Increment the current page
    this.currentPage++;

    // Load the next page of schools
    this.loadSchools();

    // Complete the infinite scroll event
    (event.target as IonInfiniteScroll).complete();
  }

  goToSchoolDetails(coEntidade: number) {
    this.data.getSchoolDetailsBycoEntidade(coEntidade).subscribe(
      (schoolDetails) => {
        if (schoolDetails) {
          // Implement logic to navigate to the school details page or display the details
          console.log('School details:', schoolDetails);
        } else {
          console.error('School details not found.');
        }
      },
      (error) => {
        console.error('Error fetching school details:', error);
      }
    );
  }
}
