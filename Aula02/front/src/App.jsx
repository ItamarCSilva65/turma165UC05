import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminFilmesPage from "./pages/admin/AdminFilmesPage";
import FilmesUsuarioPage from "./pages/user/FilmesUsuarioPage";
import FilmeDetalhePage from "./pages/FilmeDetaalhePage/FilmeDetalhePage";
import LoginPage from "./pages/login/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
    <>

      <BrowserRouter>
        <div className="app-shell">
          <Header />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/filmes" element={<FilmesUsuarioPage />} />
              <Route path="/filmes/:id" element=
              {
                <PrivateRoute>
                  <FilmeDetalhePage />
                  </PrivateRoute>
              }
              <Route path="/admin" element=
              {
                <PrivateRoute>
                  
                </PrivateRoute>
                <AdminFilmesPage />}
                /PrivateRoute>
              } />

              <Route path="^" element={<NotFoudPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>

    </>
  )
}