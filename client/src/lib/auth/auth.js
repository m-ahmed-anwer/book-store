import { isValidEmail, isValidPassword } from "../helpers/validation";
import { cookies } from "next/headers";

export async function login({ email, password }) {
  const cookie = await cookies();
  if (!isValidEmail(email)) {
    return { success: false, message: "Invalid email address" };
  }
  if (!isValidPassword(password)) {
    return {
      success: false,
      message: "Password must be at least 6 characters long",
    };
  }

  // dispatch(setCurrentUser({ id: 1, name: "Ahmed", email: email }));

  cookie.set("authorization", response.data);

  return { success: true, data: { id: 1, name: "Ahmed", email: email } };
  // try {
  //   // Make a POST request to the backend API for login
  //   const response = await axios.post("/asdad", {
  //     email,
  //     password,
  //   });

  //   // Handle successful response
  //   if (response.status === 200) {
  //     console.log("Login successful", response.data);
  //     return { success: true, data: response.data };
  //   } else {
  //     return {
  //       success: false,
  //       message: response.data.message || "Login failed. Try again.",
  //     };
  //   }
  // } catch (error) {
  //   // Handle network or server errors
  //   if (error.response && error.response.data) {
  //     // Server provided an error response
  //     return {
  //       success: false,
  //       message: error.response.data.message || "Server error occurred.",
  //     };
  //   } else {
  //     // Something went wrong in the request (e.g., network error)
  //     return { success: false, message: "An error occurred during login." };
  //   }
  // }
}
