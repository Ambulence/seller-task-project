import React from 'react';
import useFetch from '../compoments/hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Loader } from '../compoments/Loader';
import { Photos } from '../compoments/Photos';
import { Photo } from '../types/Photo';

export const PhotosPage: React.FC = () => {
  const { albumId = '' } = useParams();

  const {
    data: photos,
    error: showError,
    loading: isLoading,
  } = useFetch<Photo[], string>({
    url: `photos?albumId=${albumId}`,
    initialData: [],
    deps: [albumId],
  });

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Photos</h1>

          <div className="block">
            <>
              {isLoading ? (
                <Loader />
              ) : showError ? (
                <p>Error</p>
              ) : (
                <Photos photos={photos} />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
