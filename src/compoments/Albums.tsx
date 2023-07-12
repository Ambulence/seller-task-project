import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Album } from '../types/Album';

type Props = {
  albums: Album[];
};

export const Albums: React.FC<Props> = ({ albums }) => {
  const navigate = useNavigate();

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {albums.map((album) => (
          <tr key={album.id}>
            <td className="is-vcentered">{album.title}</td>

            <td className="is-vcentered">
              <button
                className="button is-link is-small"
                onClick={() => navigate(`photos/${album.id}`)}
              >
                Photos
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
