import { jwtDecode } from "jwt-decode";
import { authTokenKey } from "./constants";

export const getAuthToken = () => {
  return window.localStorage.getItem(authTokenKey);
};

export const setAuthToken = (token) => {
  window.localStorage.setItem(authTokenKey, token);
};

export const isTokenValid = (token) => {

    
    if (!token) {
        setAuthToken(null)
        return false;
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        // Check if token has expired
        if (decodedToken.exp < currentTime) {
            setAuthToken(null)
            return false;
        }

        return true;
    } catch (error) {
        console.error('Invalid token:', error);
        setAuthToken(null)
        return false;
    }
};

