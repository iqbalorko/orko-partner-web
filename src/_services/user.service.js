import axios from 'axios';
import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
};

function login(form) {

  console.log('d', form)
  let formD = new FormData();
  formD.append('userid', form.userid);
  formD.append('password', form.password);
  formD.append('user_type', form.user_type);
  var url = `${process.env.VUE_APP_API_URL}/api/v1/login?password_required=1`;
  console.log('url', url)
   return axios.post(url,formD)
    .then((user) => {
        if(user.data.status_code == 400){
            return user.data
        }
      // Vue.prototype.$snotify.clear();
      // if (user.data.Status == 'failed') {
      //   // Vue.prototype.$snotify.error('Failed');
      // } else {
      //   console.log('user 01', user);
      //   // Vue.prototype.$snotify.success('Successfully login');
      //   localStorage.setItem('user', JSON.stringify(user.data));
      //   localStorage.setItem('user_token', JSON.stringify(user.data.access_token));
      //   return user;
      // }
      // login successful if there's a jwt token in the response
    }).catch((err) => {
        console.log('use', err)
         return "<el-alert title='error alert' type='error' show-icon />"
      // Vue.prototype.$snotify.error('Invalid Credentials', err);
      // this.$emit.handleError();
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
