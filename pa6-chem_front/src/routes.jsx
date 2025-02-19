import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { useAuthStore } from "./store/authStore";
import AuthForm from "./components/entry/AuthForm";
import MainPage from "./components/pages/MainPage";
import ProfilePage from "./components/pages/ProfilePage";
import GalleryCollection from "./components/gallery/GalleryCollection";
import Services from "./components/services/Services";
import ImageUpload from "./components/imageUpload/ImageUpload";
export default function AppRoutes() {
  const user = useAuthStore((state) => state.user);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage>
            <HomePage>
              <Services />
              <GalleryCollection />
            </HomePage>
          </MainPage>
        }
      />
      <Route
        path="/profile"
        element={
          user ? (
            <MainPage>
              <ProfilePage />
            </MainPage>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/gallery"
        element={
          <MainPage>
            <HomePage>
              <GalleryCollection />
            </HomePage>
          </MainPage>
        }
      />
      <Route
        path="/gallery/upload"
        element={
          <MainPage>
            <HomePage>
              <ImageUpload />
            </HomePage>
          </MainPage>
        }
      />
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/" />
          ) : (
            <MainPage>
              <AuthForm />
            </MainPage>
          )
        }
      />
    </Routes>
  );
}
