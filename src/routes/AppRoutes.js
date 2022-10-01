import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainNavbar } from '../components/common'
import { DashboardPage, HomePage, LoginPage } from '../components/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}