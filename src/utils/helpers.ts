import { User } from '../types/User';

export function sortUsers(user: User[], sortDirection: null | 'asc' | 'desc') {
  if (!sortDirection) {
    return user;
  }

  return [...user].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });
}
