import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FavoriteButtonComponent],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {
  user = input.required<User>();
  showButtons = input<boolean>(true);
  
  presenceToggled = output<number>();
  presenterSelected = output<User>();
  favoriteToggled = output<number>();

  togglePresence() {
    this.presenceToggled.emit(this.user().id);
  }

  setPresentationUser() {
    this.presenterSelected.emit(this.user());
  }

  toggleFavorite() {
    this.favoriteToggled.emit(this.user().id);
  }
}
