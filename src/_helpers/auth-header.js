export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('api_token'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}
