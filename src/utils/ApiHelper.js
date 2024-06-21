import { useGlobalDispatch } from "../providers/GlobalState";
import { getAuthToken, isTokenValid, setAuthToken } from "./tokenHelper";
import { isBlank } from "./util";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.post["Content-type"] = "application/json";

// Search City
export const searchCity = async (cityName = "") => {
  try {
    let apiUrl = `/api/v1/city?name=`;
    if (!isBlank(cityName)) {
      apiUrl = `/api/v1/city?name=${cityName}`;
    }
    const response = await apiCall("GET", apiUrl);
    if (response.status !== 200) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const registerUser = async ({
  registerData,
  handleSuccess,
  handleError,
  dispatch,
}) => {
  try {
    const response = await apiCall(
      "POST",
      "/api/v1/user/register",
      JSON.stringify(registerData)
    );
    if (response.status === 201) {
      setAuthToken(response.data.token);
      dispatch({
        type: "SET_USER",
        payload: {
          name: response.data.name,
          surname: response.data.surname,
          token: response.data.token,
        },
      });
      handleSuccess(response.data.name);
    }
  } catch (error) {
    handleError(error);
  }
};

export const signIn = async ({
  loginData,
  handleSuccess,
  handleError,
  dispatch,
}) => {
  try {
    const response = await apiCall(
      "POST",
      "/api/v1/user/login",
      JSON.stringify(loginData)
    );
    if (response.status === 200) {
      setAuthToken(response.data.token);
      dispatch({
        type: "SET_USER",
        payload: {
          name: response.data.name,
          surname: response.data.surname,
          token: response.data.token,
        },
      });
      handleSuccess(response.data.name);
    }
  } catch (error) {
    handleError(error);
  }
};

export const apiCall = (method, url, data) => {
  let headers = {};

  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }
  return axios({ method: method, url: url, data: data, headers: headers });
};

export const setupInterceptors = (dispatch) => {
  axios.interceptors.request.use(
    async (config) => {
      console.log(config)
      const token = getAuthToken();
      if (token !== null || token != 'null') {
        if (!isTokenValid(token)) {
          dispatch({ type: "LOGOUT" });
          setAuthToken(null);
          return Promise.reject(new Error("Token is expired"));
        }
      } else {
        dispatch({ type: "LOGOUT" });
        setAuthToken(null);
        return Promise.reject(new Error("Token is expired"));
      }

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
