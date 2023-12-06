import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchQuery: string = '';
  messages: Message[] = [];
  filteredMessages: Message[] = [];

  constructor(
    private menu: MenuController,
    private router: Router,
    private data: DataService
  ) {
    this.messages = this.data.getMessages();
    this.filteredMessages = this.messages; // Initialize with all messages
  }

  refresh(ev: any) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.filteredMessages;
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
      // Add more cases for additional pages if needed
    }
  }

  onSearchInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.searchQuery = inputValue;

    this.filteredMessages = this.messages.filter(message => {
      const searchableContent = `${message.fromName.toLowerCase()} ${message.subject.toLowerCase()} ${message.date.toLowerCase()}`;
      return searchableContent.includes(inputValue);
    });
  }
}
