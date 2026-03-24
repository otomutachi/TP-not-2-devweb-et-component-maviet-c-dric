import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-presenter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presenter.html',
  styleUrl: './presenter.css'
})
export class PresenterComponent {
  presenter = input<User | null>(null);
  closed = output<void>();

  clearPresenter() {
    this.closed.emit();
  }
}
