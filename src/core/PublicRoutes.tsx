import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SearchWallet from '../views/SearchWallet';
import ViewWallet from '../views/ViewWallet';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SearchWallet />} />
      <Route path="wallet/:id" element={<ViewWallet />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default PublicRoutes;
