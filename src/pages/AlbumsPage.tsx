import React, { useEffect, useState } from 'react';
import { Album } from '../types/Album';
import { getAlbums } from '../api';
import { Loader } from '../compoments/Loader';
import { Albums } from '../compoments/Albums';

export const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loadingAlbums, setLoadingAlbums] = useState(false);
  const [showError, setShowError] = useState(false);

  const loadPosts = async() => {
    try {
      const postsFromServer = await getAlbums();

      setAlbums(postsFromServer);
    } catch {
      setShowError(true);
    } finally {
      setLoadingAlbums(true);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Posts</h1>

          <div className="block">
            {loadingAlbums && !showError ? (
              <Albums albums={albums} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
