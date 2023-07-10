import React, { useState, ChangeEvent } from 'react';
import { Loader } from '../compoments/Loader/Loader';
import { UserList } from '../compoments/UserList';
import { User } from '../types/User';
import useFetch from '../compoments/hooks/useFetch';

export const UserPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [isSorted, setIsSorted] = useState(false);

  const {
    data: users,
    error: showError,
    loading: isLoading,
  } = useFetch<User[]>('users', []);

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSort = () => {
    setSortDirection(prevDirection => (
      prevDirection === 'asc' ? 'desc' : 'asc'
    ));

    setIsSorted(true);
  };

  const handleReset = () => {
    setSortDirection('asc');
    setIsSorted(false);
  };

  const visibleUsers = users.filter((user): boolean => {
    const { username } = user;

    return username.toLowerCase().includes(query.toLowerCase().trim());
  });

  let sortedUsers = visibleUsers;

  if (isSorted) {
    sortedUsers = [...visibleUsers].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.username.localeCompare(b.username);
      } else {
        return b.username.localeCompare(a.username);
      }
    });
  }

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Users</h1>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search username"
              value={query}
              onChange={handleQuery}
            />
          </div>

          <div className="block">
            <>
              {isLoading ? (
                <Loader />
              ) : showError ? (
                <p>Can`t load data</p>
              ) : (
                <UserList
                  users={sortedUsers}
                  onSort={handleSort}
                  onReset={handleReset}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
