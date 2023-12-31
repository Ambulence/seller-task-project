import React from 'react';
import { CommentsList } from '../compoments/CommentsList';
import useFetch from '../compoments/hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Loader } from '../compoments/Loader';
import { Comments } from '../types/Comment';

export const CommentsPage: React.FC = () => {
  const { postId = '' } = useParams();

  const {
    data: comments,
    error: showError,
    loading: isLoading,
  } = useFetch<Comments[], string>({
    url: `comments?postId=${postId}`,
    initialData: [],
    deps: [postId],
  });

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Comments</h1>

          <div className="block">
            <>
              {isLoading ? (
                <Loader />
              ) : showError ? (
                <p>Error</p>
              ) : (
                <CommentsList comments={comments} />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
