export default {
    isAuth: false, //标识用户是否登录
    authLogin(cb) {
        this.isAuth = true;
        setTimeout(cb, 500);
    },
    authLogout(cb) {
        this.isAuth = false;
        setTimeout(cb, 500)
    }
}