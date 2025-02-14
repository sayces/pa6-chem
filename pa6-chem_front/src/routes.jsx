import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { useAuthStore } from "./store/authStore";
import AuthForm from "./components/entry/AuthForm";
import MainPage from "./components/pages/MainPage";
import ProfilePage from "./components/pages/ProfilePage";

export default function AppRoutes() {
  const user = useAuthStore((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<MainPage><HomePage /></MainPage> } />
      <Route path="/profile" element={user ? <MainPage><ProfilePage /></MainPage> : <Navigate to="/login" />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <MainPage><AuthForm /></MainPage>}
      />
    </Routes>
  );
}
