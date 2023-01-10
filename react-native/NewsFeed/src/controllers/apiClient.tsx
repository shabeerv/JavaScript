import axios from 'axios';
const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Api-key': '406a01fc93854376a1b662862eb8eaaf',
  },
});
