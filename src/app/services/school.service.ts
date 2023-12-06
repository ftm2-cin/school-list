import { Injectable } from '@angular/core';
import { School } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private readonly storageKey = 'favoriteSchools'; // Key for storing data in LocalStorage

  favoriteSchools: School[] = [];

  constructor() {
    // Retrieve favorite schools from LocalStorage during initialization
    const storedFavorites = localStorage.getItem(this.storageKey);
    this.favoriteSchools = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  private updateLocalStorage() {
    // Update LocalStorage with the current favorite schools data
    localStorage.setItem(this.storageKey, JSON.stringify(this.favoriteSchools));
  }

  addFavorite(school: School) {
    this.favoriteSchools.push(school);
    this.updateLocalStorage(); // Update LocalStorage after adding a favorite
  }

  removeFavorite(schoolId: number) {
    this.favoriteSchools = this.favoriteSchools.filter(school => school.coEntidade !== schoolId);
    this.updateLocalStorage(); // Update LocalStorage after removing a favorite
  }

  getFavoriteSchools(): School[] {
    return this.favoriteSchools;
  }

  searchFavoriteSchools(query: string): School[] {
    const sanitizedQuery = query.toLowerCase().trim();

    if (!sanitizedQuery) {
      return this.favoriteSchools; // Return all favorite Schools if the query is empty
    }

    return this.favoriteSchools.filter(school => {
      // Customize the properties you want to include in the search
      const searchableContent = `${school.noEntidade.toLowerCase()} ${school.coEntidade}`;
      
      return searchableContent.includes(sanitizedQuery);
    });
  }
}
