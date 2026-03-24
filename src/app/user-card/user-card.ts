import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {
  user = input.required<User>();
  showButtons = input<boolean>(true);
  
  presenceToggled = output<number>();
  presenterSelected = output<User>();

  togglePresence() {
    this.presenceToggled.emit(this.user().id);
  }

  setPresentationUser() {
    this.presenterSelected.emit(this.user())
  }
}
