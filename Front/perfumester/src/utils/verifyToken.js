import { jwtDecode } from "jwt-decode";
export function isTokenValid(token) {
  console.log("IN VERIFY TOKEN");

  if (!token) return false;
  try {
    const decoded = jwtDecode(token);

    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Invalid token format:", error);
    return false;
  }
}
