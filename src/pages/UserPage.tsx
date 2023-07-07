import React, { useState, useEffect, ChangeEvent } from 'react';
import { Loader } from '../compoments/Loader/Loader';
import { UserList } from '../compoments/UserList';
import { User } from '../types/User';
import { getUsers } from '../api';

export const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [query, setQuery] = useState('');

  const loadUsers = async() => {
    try {
      const usersFromServer = await getUsers();

      setUsers(usersFromServer);
    } catch (error) {
      setShowError(true);
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const visibleUsers = users.filter((user): boolean => {
    const { username } = user;

    return username.toLowerCase().includes(query.toLowerCase().trim());
  });

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
            {isLoading && !showError ? (
              <UserList users={visibleUsers} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
