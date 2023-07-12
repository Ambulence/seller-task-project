import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

import { UserPage } from './pages/UserPage';
import { PostsPage } from './pages/PostsPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { CommentsPage } from './pages/CommentsPage';
import { PhotosPage } from './pages/PhotosPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="/">
        <Route index element={<UserPage />} />
        <Route path="users" element={<UserPage />} />
      </Route>

      <Route path="posts">
        <Route path=":userId" element={<PostsPage />} />
        <Route path=":userId/comments/:postId" element={<CommentsPage />} />
      </Route>

      <Route path="albums">
        <Route path=":userId" element={<AlbumsPage />} />
        <Route path=":userId/photos/:albumId" element={<PhotosPage />} />
      </Route>

      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};
