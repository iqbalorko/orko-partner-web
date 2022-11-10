import {userService} from '../_services/user.service';
const auth = {
    namespaced: true,
    state: {},
    actions: {
        login({dispatch, commit}, form) {
            // commit('loginRequest', {userid});
            userService.login(form)
                .then(user => {
                        console.log('userss', user)
                        if (user.data.Status == "failed") {
                            return true;
                        } else {
                            commit('loginSuccess', user.data);
                            // var prev_url = localStorage.getItem('prev_url');
                            // return router.push('/dashboard')
                        }
                    },
                    error => {
                        console.log('errorss',error)
                        // this.$router.push('login');
                        commit('loginFailure', error);
                        dispatch('alert/error', error, {root: true});
                    }
                );
        },
        logout({commit}) {
            userService.logout();
            commit('logout');
        },
    },
    mutations: {
        loginRequest(state, user) {
            state.status = {loggingIn: true};
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = {loggedIn: true};
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        },
    },
    getters: {}
}

export default auth


