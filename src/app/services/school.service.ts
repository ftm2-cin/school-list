import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  favoriteSchools: any[] = []; // Array para armazenar mensagens favoritas

  constructor() {}

  addFavorite(message: any) {
    // Adicione a mensagem aos favoritos
    this.favoriteSchools.push(message);
  }

  removeFavorite(messageId: number) {
    // Remova a mensagem dos favoritos pelo ID
    this.favoriteSchools = this.favoriteSchools.filter(msg => msg.id !== messageId);
  }

  getFavoriteMessages() {
    // Obtenha a lista de mensagens favoritas
    return this.favoriteSchools;
  }
}
