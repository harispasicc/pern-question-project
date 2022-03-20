import axios from "axios";
axios.defaults.withCredentials = true;

export async function onSignUp(signupData) {
  return await axios.post("http://localhost:5000/api/register", signupData);
}

export async function onSignIn(signinData) {
  return await axios.post("http://localhost:5000/api/login", signinData);
}

export async function onSignOut() {
  return await axios.get("http://localhost:5000/api/logout");
}

export async function onForgotPassword() {
  return await axios.put("http://localhost:5000/api/forgot-password");
}

export async function UpdateProfile(updateData) {
  return await axios.put(
    "http://localhost:5000/api/update-profile",
    updateData
  );
}
