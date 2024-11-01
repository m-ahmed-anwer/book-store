// src/helpers/validation.js

export function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


export function isValidPassword(password) {
  // Check if password is at least 6 characters long
  return password && password.length >= 6;
}

export function isNotEmpty(value) {
  return value.trim().length > 0;
}
