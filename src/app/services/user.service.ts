import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly users = signal<User[]>([
    { id: 1, firstName: 'Jean', lastName: 'Dupont', age: 22, os: 'Windows', isPresent: false },
    { id: 2, firstName: 'Marie', lastName: 'Martin', age: 21, os: 'MacOS', isPresent: false },
    { id: 3, firstName: 'Pierre', lastName: 'Bernard', age: 23, os: 'Linux', isPresent: false },
    { id: 4, firstName: 'Sophie', lastName: 'Lefevre', age: 20, os: 'Windows', isPresent: false },
    { id: 5, firstName: 'Luc', lastName: 'Moreau', age: 24, os: 'MacOS', isPresent: false },
    { id: 6, firstName: 'Anne', lastName: 'Dubois', age: 22, os: 'Linux', isPresent: false },
  ]);

  private readonly presenter = signal<User | null>(null);

  getUsers() {
    return this.users.asReadonly();
  }

  getPresenter() {
    return this.presenter.asReadonly();
  }

  togglePresence(userId: number) {
    const users = this.users();
    const user = users.find(u => u.id === userId);
    if (user) {
      user.isPresent = !user.isPresent;
      this.users.set([...users]);
    }
  }

  setPresentationUser(user: User | null) {
    this.presenter.set(user);
  }
}
