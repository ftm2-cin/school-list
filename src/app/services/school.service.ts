import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private readonly storageKey = 'favoriteSchools'; // Key for storing data in LocalStorage

  favoriteSchools: any[] = [];

  constructor() {
    // Retrieve favorite schools from LocalStorage during initialization
    const storedFavorites = localStorage.getItem(this.storageKey);
    this.favoriteSchools = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  private updateLocalStorage() {
    // Update LocalStorage with the current favorite schools data
    localStorage.setItem(this.storageKey, JSON.stringify(this.favoriteSchools));
  }

  addFavorite(message: any) {
    this.favoriteSchools.push(message);
    this.updateLocalStorage(); // Update LocalStorage after adding a favorite
  }

  removeFavorite(messageId: number) {
    this.favoriteSchools = this.favoriteSchools.filter(msg => msg.id !== messageId);
    this.updateLocalStorage(); // Update LocalStorage after removing a favorite
  }

  getFavoriteMessages() {
    return this.favoriteSchools;
  }
}
