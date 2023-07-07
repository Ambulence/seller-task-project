import React from 'react';
import { Comments } from '../types/Comment';

type Props = {
  comments: Comments[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
          <th>Email</th>
          <th> </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {comments.map((comment) => (
          <tr key={comment.id}>
            <td className="is-vcentered">{comment.name}</td>
            <td className="is-vcentered">{comment.body}</td>
            <td className="is-vcentered">
              <a href="mailto:">{comment.email}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
