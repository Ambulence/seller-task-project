import React, { useState, useEffect } from 'react';
import { Loader } from '../compoments/Loader/Loader';
import { Comments } from '../compoments/Comments';

export const CommentsPage: React.FC = () => {
  // const loadComments = async() => {
  //   try {
  //     const commentsFromServer = await getUsers();

  //     setComment(commentsFromServer);
  //   } catch (error) {
  //     setShowError(true);
  //   } finally {
  //     setIsLoading(true);
  //   }
  // };

  // useEffect(() => {
  //   loadComments();
  // }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Comment</h1>

          <div className="block">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};
