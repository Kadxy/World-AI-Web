export const Path = {
  ROOT: '/',
  SETTINGS: '/settings',
  LOGIN: '/login',
  ACCOUNT: '/account',
  API_KEYS: '/api-keys',
} as const; 

export const NO_SIDEBAR_PATHS: (typeof Path)[keyof typeof Path][] = [Path.LOGIN];