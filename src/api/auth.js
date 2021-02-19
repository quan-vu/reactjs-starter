export const AUTH_TOKEN = 'access_token';

export function setAccessToken(token) {
  localStorage.setItem(AUTH_TOKEN, token);
}

export function getAccessToken() {
  return localStorage.getItem(AUTH_TOKEN);
}

export function clearAcessToken() {
  localStorage.removeItem(AUTH_TOKEN);
}

export function logout() {
  clearAcessToken();
}
