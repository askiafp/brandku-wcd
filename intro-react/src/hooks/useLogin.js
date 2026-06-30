import { useEffect, useState } from "react";
import { apiClient } from "../lib/apiClient";

const getSavedUser = () => {
  const savedUser = localStorage.getItem("brandku_user");
  return savedUser ? JSON.parse(savedUser) : null;
};

export const useLogin = () => {
  const [user, setUser] = useState(getSavedUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncUser = () => {
      setUser(getSavedUser());
    };

    window.addEventListener("brandku-auth-change", syncUser);

    return () => {
      window.removeEventListener("brandku-auth-change", syncUser);
    };
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post("/login", credentials);
      setUser(response.user);
      localStorage.setItem("brandku_user", JSON.stringify(response.user));
      window.dispatchEvent(new Event("brandku-auth-change"));
      return response.user;
    } catch (err) {
      setError(err);
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("brandku_user");
    setUser(null);
    setError(null);
    window.dispatchEvent(new Event("brandku-auth-change"));
  };

  return { user, loading, error, login, logout };
};
