global.store = {
    state: {
        user: {}
    },
    saveUser(user) {
        this.state.user = user;
    }
}