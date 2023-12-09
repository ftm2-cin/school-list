import { Component, OnInit } from '@angular/core';
import { MenuController, IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, School } from '../services/data.service';
import { Observable, combineLatest } from 'rxjs';

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
    this.loadSchools(this.currentPage);
  }

  loadSchools(page: number) {
    this.data.getSchools(page).subscribe((schools) => {
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
  
    if (this.searchQuery) {
      // Use both methods to search for schools
      const byCoEntidade$ = this.data.getSchoolBycoEntidade(parseInt(this.searchQuery, 10));
      const byNoEntidade$ = this.data.getSchoolBynoEntidade(this.searchQuery);
  
      // Combine the results of both searches
      combineLatest([byCoEntidade$, byNoEntidade$]).subscribe(([byCoEntidade, byNoEntidade]) => {
        // Merge the results into a single array
        const searchResults = [byCoEntidade, byNoEntidade].filter((result) => result !== undefined) as School[];
  
        // Update the filteredSchools array based on the search results
        this.filteredSchools = searchResults;
      });
    } else {
      // If the search query is empty, show all schools
      this.filteredSchools = this.schools;
    }
  }
  
  

  loadData(event: any) {
    this.currentPage++;
    this.loadSchools(this.currentPage);

    (event.target as IonInfiniteScroll).complete();
  }

  goToSchoolDetails(coEntidade: number) {
    this.data.getSchoolDetailsBycoEntidade(coEntidade).subscribe(
      (schoolDetails) => {
        if (schoolDetails) {
         
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
