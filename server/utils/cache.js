const cache = new Map();
const backup = new Map(); // last known good data

export const getCache = (key) => cache.get(key) || null;

export const setCache = (key, value) => {
  cache.set(key, value);
  backup.set(key, value); // fallback
};

export const getBackup = (key) => backup.get(key) || null;
