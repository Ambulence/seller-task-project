import React, { useState, useEffect } from 'react';
import { Loader } from '../compoments/Loader/Loader';
import { UserLIst } from '../compoments/UserList';
import { User } from '../types/User';
import { getUsers } from '../api';

export const UserPage:React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

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

  return (
    <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Users</h1>

            <div className="block">
              {isLoading && !showError
                ? (
                  <UserLIst users={users}/>
                ) : (
                  <Loader />
                )}
            </div>
          </div>
        </div>
      </div>
  );
};
