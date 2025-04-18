import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderServer from './components/Header/HeaderServer';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/signin';
import { Toaster } from 'react-hot-toast';

import PrivateRoute from './components/PrivateRoute';

import Dashboard from './pages/Dashboard/Dashboard';
import { Post } from './pages/Dashboard/Post';
import DashboardLayout from './components/DashComponents/DashboardLayout';
import PermissionPrivateRoute from './components/PermissionPrivateRoute';
import { Page } from './pages/Dashboard/Page';
import { Pages } from './pages/Dashboard/Pages';

export default function App() {
  return (
    <BrowserRouter>
      <main className="transition-colors duration-500 dark:dark-gradiant relative w-full h-auto overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route element={<PermissionPrivateRoute />}>
                <Route path="/dashboard/post-new" element={<Post />} />
                <Route path="/dashboard/page-new" element={<Page />} />
                <Route path="/dashboard/pages" element={<Pages />} />
                {/* Add more dashboard routes here */}
              </Route>
            </Route>
          </Route>
        </Routes>
        <Toaster position="top-center" />
      </main>
    </BrowserRouter>
  );
}
