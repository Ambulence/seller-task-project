import React, { useState, ChangeEvent, useMemo } from 'react';
import { Loader } from '../compoments/Loader/Loader';
import { UserList } from '../compoments/UserList';
import { User } from '../types/User';
import useFetch from '../compoments/hooks/useFetch';
import { sortUsers } from '../utils/helpers';

export const UserPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [sortDirection, setSortDirection] = useState<null | 'asc' | 'desc'>(
    null,
  );

  const {
    data: users,
    error: showError,
    loading: isLoading,
  } = useFetch<User[], string>({ url: 'users', initialData: [], deps: [] });

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSort = () => {
    setSortDirection((prevDirection) =>
      prevDirection === 'asc' ? 'desc' : 'asc');
  };

  const handleReset = () => {
    setSortDirection(null);
  };

  const visibleUsers = users.filter((user): boolean => {
    const { username } = user;

    return username.toLowerCase().includes(query.toLowerCase().trim());
  });

  const sortedUsers = useMemo(() => {
    return sortUsers(visibleUsers, sortDirection);
  }, [visibleUsers, sortDirection]);

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
