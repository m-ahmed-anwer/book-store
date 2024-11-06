// export async function login({ email, password }) {
//   try {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       return {
//         success: true,
//         data: data, // You can return any data from the API here
//       };
//     } else {
//       return {
//         success: false,
//         message: data.message || "Login failed",
//       };
//     }
//   } catch (error) {
//     console.error("Error during login", error);
//     return {
//       success: false,
//       message: "An unexpected error occurred during login.",
//     };
//   }
// }
