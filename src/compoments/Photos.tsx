import React from 'react';
import { Photo } from '../types/Photo';

type Props = {
  photos: Photo[];
};

export const Photos: React.FC<Props> = ({ photos }) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {photos.map((photo) => (
          <tr key={photo.id}>
            <td className="is-vcentered">{photo.title}</td>
            <td className="is-vcentered">
              <a>{photo.url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
