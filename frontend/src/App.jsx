import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
import General from './pages/Dashboard/Settings/General';
import { Posts } from './pages/Dashboard/Posts';
import Blogs from './pages/Blogs';
import ForntLayout from './components/Layouts/ForntLayout';
import BlogSingle from './components/BlogSingle';
import Services from './pages/Services';
import IndustryVerticles from './pages/Dashboard/Appearance/IndustryVerticles';
import Industries from './pages/Industries';

export default function App() {
  return (
    <BrowserRouter>
      <main className="transition-colors duration-500 dark:dark-gradiant relative w-full h-auto overflow-hidden">
        <Routes>
          <Route element={<ForntLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogSingle />} />
            <Route path="/services/:slug" element={<Services />} />
            <Route path="/industries/:slug" element={<Industries />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route element={<PermissionPrivateRoute />}>
                <Route path="/dashboard/post-new" element={<Post />} />
                <Route path="/dashboard/page-new" element={<Page />} />
                <Route path="/dashboard/pages" element={<Pages />} />
                <Route path="/dashboard/posts" element={<Posts />} />

                <Route
                  path="/dashboard/settings/general"
                  element={<General />}
                />
                <Route
                  path="/dashboard/customize/industryverticles"
                  element={<IndustryVerticles />}
                />
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
