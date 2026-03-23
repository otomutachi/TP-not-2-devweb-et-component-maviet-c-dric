export type OS = 'Windows' | 'MacOS' | 'Linux';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  os: OS;
  isPresent: boolean;
  isFavorite: boolean;
}
