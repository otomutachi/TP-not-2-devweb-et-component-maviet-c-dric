import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-presenter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presenter.html',
  styleUrl: './presenter.css'
})
export class PresenterComponent {
  private userService = inject(UserService);
  presenter = this.userService.getPresenter();

  clearPresenter() {
    this.userService.setPresentationUser(null);
  }
}
