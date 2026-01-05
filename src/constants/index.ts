// Constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
  },
  USER: {
    PROFILE: "/user/profile",
    UPDATE: "/user/update",
  },
} as const;

export const APP_CONFIG = {
  APP_NAME: "English App",
  DEFAULT_LOCALE: "vi",
  ITEMS_PER_PAGE: 10,
} as const;

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^(\+84|0)[1-9]\d{8}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
} as const;
