const regularUser = {
  firstName: 'Tom',
  lastName: 'Hank',
  authenticationLevel: 'user',
  birthDay: 'July 9, 1956',
  descriptions: 'The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.'
}

const adminUser = {
  firstName: 'Tom',
  lastName: 'Hardy',
  authenticationLevel: 'admin',
  birthDay: 'September 15, 1977',
  users: [{ name: 'Venom' }, { name: 'Carnage' }, { name: 'Brody' }, { name: 'Peter Parker' }]
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb, userInfo) {
    const user = userInfo.username === 'user' ? regularUser : adminUser;
    this.isAuthenticated = true;
    setTimeout(() => cb(user), 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default fakeAuth;