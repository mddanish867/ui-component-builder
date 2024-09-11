import { jwtDecode, JwtPayload } from "jwt-decode";

interface UserToken extends JwtPayload {
  name?: string;
  email?: string;
  profileImage?: string;
}

export function decodeToken(token: string | null): UserToken | null {
  if (!token) {
    return null;
  }

  try {
    return jwtDecode<UserToken>(token);
  } catch (error) {
    return null;
  }
}


export function setToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
    
  }
  return null;
}



export function removeToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

export function isAuthenticated() {
  const token = getToken();  // Ensure this function correctly retrieves the token
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);  // Use a reliable JWT decoding library like jwt-decode
    return decodedToken;
  } catch (error) {
    return false;
  }
}

export function getUserFromToken(): UserToken | null {
  const token = getToken();
  return token ? decodeToken(token) : null;
}