import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.css'
})
export class FavoriteButtonComponent {
  isFavorite = input<boolean>(false);
  favoriteToggled = output<boolean>();

  toggleFavorite() {
    this.favoriteToggled.emit(!this.isFavorite());
  }
}
