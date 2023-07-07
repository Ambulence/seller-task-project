import React from 'react';
import { User } from '../types/User';
import { useNavigate } from 'react-router-dom';

type Props = {
  users: User[];
};

export const UserList: React.FC<Props> = ({ users }) => {
  const navigate = useNavigate();

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Usermane</th>
          <th>Email</th>
          <th> </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="is-vcentered">{user.id}</td>
            <td className="is-vcentered">{user.name}</td>
            <td className="is-vcentered">{user.username}</td>
            <td className="is-vcentered">
              <a href="mailto:">{user.email}</a>
            </td>

            <td className="is-vcentered">
              <button
                className="button is-link is-small"
                onClick={() => navigate('posts')}
              >
                Posts
              </button>
            </td>

            <td className="is-vcentered">
              <button
                className="button is-link is-small"
                onClick={() => navigate('albums')}
              >
                Albums
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
