import React, { useEffect, useState } from 'react';
import { PostList } from '../compoments/PostList';
import { Post } from '../types/Post';
import { getPosts } from '../api';
import { Loader } from '../compoments/Loader';

export const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPost, setLoadingPost] = useState(false);
  const [showError, setShowError] = useState(false);

  const loadPosts = async() => {
    try {
      const postsFromServer = await getPosts();

      setPosts(postsFromServer);
    } catch {
      setShowError(true);
    } finally {
      setLoadingPost(true);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // const filteredPosts = posts.filter(post => post.userId === user.id);

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Posts</h1>

          <div className="block">
            {loadingPost && !showError ? (
              <PostList posts={posts} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
