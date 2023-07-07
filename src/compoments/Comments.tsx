import React from 'react';

export const Comments: React.FC = () => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
          <th> </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <p>Comment</p>
        <p>Comment</p>
        <p>Comment</p>
        <p>Comment</p>
      </tbody>
    </table>
  );
};
