import React from 'react';
import { Album } from '../types/Album';
import { Loader } from '../compoments/Loader';
import { useParams } from 'react-router-dom';
import useFetch from '../compoments/hooks/useFetch';
import { Albums } from '../compoments/Albums';

export const AlbumsPage: React.FC = () => {
  const { userId = '' } = useParams();

  const {
    data: albums,
    error: showError,
    loading: isLoading,
  } = useFetch<Album[], string>({
    url: `albums?userId=${userId}`,
    initialData: [],
    deps: [userId],
  });

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Albums</h1>

          <div className="block">
            <>
              {isLoading ? (
                <Loader />
              ) : showError ? (
                <p>Error</p>
              ) : (
                <Albums albums={albums} />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
