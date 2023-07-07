import React from 'react';
import { PostList } from '../compoments/PostList';
import { Post } from '../types/Post';
import { Loader } from '../compoments/Loader';
import { useParams } from 'react-router-dom';
import useFetch from '../compoments/hooks/useFetch';

export const PostsPage: React.FC = () => {
  const { userId = 0 } = useParams();

  const {
    data: posts,
    error: showError,
    loading: isLoading,
  } = useFetch<Post[]>('posts', []);

  const filteredPosts = posts.filter(post => post.userId === +userId);

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Posts</h1>

          <div className="block">
            <>
              {isLoading ? (
                <Loader />
              ) : showError ? (
                <p>Error</p>
              ) : (
                <PostList posts={filteredPosts} />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
