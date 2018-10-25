import React from 'react';

import NavBar from '../components/NavBar'
import Landing from './components/Landing'

const Home = () => {
  return (
    <div>
      <NavBar hasBackground={false} />
      <Landing />
    </div>
  )
}

export default Home;