import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer, MainNavbar } from '../components/common'
import { DashboardPage, HomePage, LoginPage } from '../components/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark d-flex flex-column min-vh-100">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
