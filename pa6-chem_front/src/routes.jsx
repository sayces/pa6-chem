import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { useAuthStore } from "./store/authStore";
import AuthForm from "./components/entry/AuthForm";
import MainPage from "./components/main/MainPage";
import ProfilePage from "./components/profile/ProfilePage";
import GalleryCollection from "./components/gallery/GalleryCollection";
import Services from "./components/services/Services";
import Calendar from "./components/calendar/Calendar";
import Loader from "./components/loader/Loader";
import Card from "./components/cards/Card";
import HomePageCards from "./components/cards/HomePageCards";
export default function AppRoutes() {
  const user = useAuthStore((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<Loader />}>
      <Route path="/calendar" element={
        <MainPage>
           <HomePage>
            <Calendar />
          </HomePage>
        </MainPage>
        }>
        
      </Route>
      <Route path="/services" element={
        <MainPage>
           <HomePage>
            <Services />
          </HomePage>
        </MainPage>
        }>
        
      
      </Route>
      <Route
        path="/"
        element={
          <MainPage>
            <HomePage>
              <HomePageCards>
              <Card card={'services'}/>
              <Card card={'gallery'}/>
              <Card card={'calendar'}/>
              </HomePageCards>
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
            
              <GalleryCollection />
            
          </MainPage>
        }
      />
      <Route
        path="/gallery/upload"
        element={
          <MainPage>
            <HomePage>
              {/* <ImageUpload /> */}
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
      </Route>
    </Routes>
  );
}
