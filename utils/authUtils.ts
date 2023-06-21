import axios from "axios";
import serverAddress from "./addressUtils";
import { retrieveFromLocalStorage, saveToLocalStorage } from "./browserUtils";

export async function isUserLoggedIn() {
  const loggedInUser = retrieveFromLocalStorage("loggedInUser");

  if (loggedInUser) {
    const url = serverAddress() + "/auth/check-jwt";
    const config = {
      headers: { Authorization: `Bearer ${loggedInUser.token}` },
    };

    try {
      const response = (await axios.get(url, config)).data;
      if (response.ok) return true;
    } catch (error) {
      return false;
    }
  } else return false;
}

export async function userLogin(email: string, password: string) {
  const url = serverAddress() + "/auth/login";
  try {
    const response = await axios.post(url, { email, password });

    // 📩 Save data in localStorage
    saveToLocalStorage("loggedInUser", response.data.loggedUser);
    return response;
  } catch (error: any) {
    if (error.response) {
      console.error("⚠️ Error is:", error.response.data);
      return error.response.data;
    }
    return error;
  }
}
