import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, MainNavbar } from '../components/common'
import {
  AddPostPage,
  DashboardPage,
  EditPostPage,
  HomePage,
  LoginPage,
  PostPage,
  PostsPage,
} from '../components/pages'
import { PrivateRoute } from './PrivateRoute'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark d-flex flex-column min-vh-100">
        <MainNavbar />
        <Routes>
          {/* PublicRoutes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:postId/details" element={<PostPage />} />

          {/* PrivateRoutes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/post/add"
            element={
              <PrivateRoute>
                <AddPostPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/post/:postId/edit"
            element={
              <PrivateRoute>
                <EditPostPage />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
