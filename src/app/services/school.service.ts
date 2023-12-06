import { Injectable } from '@angular/core';
import { Message } from './data.service';

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

  searchFavoriteMessages(query: string): Message[] {
    const sanitizedQuery = query.toLowerCase().trim();

    if (!sanitizedQuery) {
      return this.favoriteSchools; // Return all favorite messages if the query is empty
    }

    return this.favoriteSchools.filter(message => {
      // Customize the properties you want to include in the search
      const searchableContent = `${message.fromName.toLowerCase()} ${message.subject.toLowerCase()} ${message.date.toLowerCase()}`;
      
      return searchableContent.includes(sanitizedQuery);
    });
  }
}
