export const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getAllLessons: state => state.lessons,
    getInfoOfUser: state => state.user
}
