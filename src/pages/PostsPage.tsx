import React from 'react';
import { PostList } from '../compoments/PostList';
import { Post } from '../types/Post';
import { Loader } from '../compoments/Loader';
import { useParams } from 'react-router-dom';
import useFetch from '../compoments/hooks/useFetch';

export const PostsPage: React.FC = () => {
  const { userId = '' } = useParams();

  const {
    data: posts,
    error: showError,
    loading: isLoading,
  } = useFetch<Post[], string>({
    url: `posts?userId=${userId}`,
    initialData: [],
    deps: [userId],
  });

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
                <PostList posts={posts} />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
