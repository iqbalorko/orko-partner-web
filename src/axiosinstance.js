import axios from 'axios';
import store from './store';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

axios.interceptors.request.use(async (config) => {
  // if (!config.url.includes('resend-password') && !config.url.includes('change-password') && !config.url.includes('validate-password') && !config.url.includes('send-passcode') && !config.url.includes('forgot-password') && !config.url.includes('signup') && !config.url.includes('signin') && !config.url.includes('refresh') && !config.url.includes('reset-password')) {
  //   await getAuthToken();
  // }
  // axios.defaults.headers.common['Authorization'] = `Bearer ${this.user.access_token}`;
  const token = JSON.parse(localStorage.getItem('api_token'));
  if (token && token != 'null') {
    config.headers.common.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));
//
axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('api_token');
    // store.dispatch('auth/clearToken')
    window.location = '/login';
  } else {
    return Promise.reject(error);
  }
});

// async function getAuthToken () {
//   // if the current store token expires soon
//   // 1800000 = means 30 mins
//   if (store.getters['auth/tokenExpiresIn'] - 1800000 <= Date.now()) {
//     try {
//       await store.dispatch('auth/refresh');
//     } catch(error) {
//       return Promise.reject(error);
//     }
//
//   }
//   return;
// }
