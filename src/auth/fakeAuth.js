const regularUser = {
  firstName: 'Tom',
  lastName: 'Hank',
  authenticationLevel: 'user',
  birthDay: 'July 9, 1956',
}

const adminUser = {
  firstName: 'Tom',
  lastName: 'Hardy',
  authenticationLevel: 'admin',
  birthDay: 'September 15, 1977',
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb, userInfo) {
    const user = userInfo.username === 'user' ? regularUser : adminUser;
    this.isAuthenticated = true;
    setTimeout(() => cb(user), 2000); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default fakeAuth;