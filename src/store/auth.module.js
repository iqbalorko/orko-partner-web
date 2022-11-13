import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
const auth = {
    namespaced: true,
    state: {
        user: JSON.parse(localStorage.getItem('user')),
        loggedIn: false,

    },
    actions: {
        login({dispatch, commit}, form) {
            commit('loginRequest', form.userid);
            let formD = new FormData();
            formD.append('userid', form.userid);
            formD.append('password', form.password);
            formD.append('user_type', form.user_type);
            var url = `${process.env.VUE_APP_API_URL}/api/v1/login?password_required=1`;
            return axios.post(url, formD)
                .then((res) => {
                    commit('loginSuccess', res.data.user);
                    return res;
                }).catch((err) => {
                    return err;
                });
        },
        logout({commit}) {
            var url = '/api/v1/user/logout';
            return axios.post(url)
                .then(res => {
                    localStorage.removeItem('api_token');
                    commit('logout');
                    return res;
                }).catch((err) => {
                    return err
                })

        },
    },
    mutations: {
        loginRequest(state, user) {
            state.status = {loggingIn: true};
            state.user = user;
        },
        loginSuccess(state, user) {
            state.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.loggedIn = false;
            state.user = null;
        },
    },
    getters: {}
}

export default auth


