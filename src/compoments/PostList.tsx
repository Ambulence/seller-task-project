import React from 'react';
import { Post } from '../types/Post';
import { useNavigate } from 'react-router-dom';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Title</th>
          <th>Post</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="is-vcentered">{post.title}</td>
            <td className="is-vcentered">{post.body}</td>

            <td className="is-vcentered">
              <button
                className="button is-link is-small"
                onClick={() => navigate('comments')}
              >
                Comments
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
