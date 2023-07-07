import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';

import { UserPage } from './pages/UserPage';
import { PostsPage } from './pages/PostsPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { CommentsPage } from './pages/CommentsPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="/">
        <Route index element={<UserPage />} />
        <Route path="users" element={<UserPage />} />
      </Route>

      <Route path="posts/:userId" element={<PostsPage />} />
      <Route path="albums" element={<AlbumsPage />} />
      <Route path="comments/:postId" element={<CommentsPage />} />

      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};
