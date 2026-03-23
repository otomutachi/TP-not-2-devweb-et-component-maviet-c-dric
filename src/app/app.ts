import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card';
import { StatisticsComponent } from './statistics/statistics';
import { PresenterComponent } from './presenter/presenter';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserCardComponent, StatisticsComponent, PresenterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private userService = inject(UserService);
  
  users$ = this.userService.getUsers();
  presenter$ = this.userService.getPresenter();

  onPresenceToggled(userId: number) {
    this.userService.togglePresence(userId);
  }

  onPresenterSelected(user: any) {
    this.userService.setPresentationUser(user);
  }
}
