import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class StatisticsComponent {
  users = input.required<User[]>();
  Math = Math;

  totalUsers = computed(() => this.users().length);
  presentUsers = computed(() => this.users().filter(u => u.isPresent).length);
  absentUsers = computed(() => this.users().filter(u => !u.isPresent).length);
  
  windowsUsers = computed(() => this.users().filter(u => u.os === 'Windows').length);
  macosUsers = computed(() => this.users().filter(u => u.os === 'MacOS').length);
  linuxUsers = computed(() => this.users().filter(u => u.os === 'Linux').length);

  averageAge = computed(() => {
    const users = this.users();
    if (users.length === 0) return 0;
    const total = users.reduce((sum, u) => sum + u.age, 0);
    return Math.round((total / users.length) * 10) / 10;
  });

  oldestUser = computed(() => {
    const users = this.users();
    return users.length > 0 ? users.reduce((oldest, u) => u.age > oldest.age ? u : oldest) : null;
  });

  youngestUser = computed(() => {
    const users = this.users();
    return users.length > 0 ? users.reduce((youngest, u) => u.age < youngest.age ? u : youngest) : null;
  });
}
