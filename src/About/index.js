import React from 'react';

import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar hasBackground={false} />
      <div style={{ marginTop: '60px', height: '400px' }}>About Page: add a component and put contents in it</div>
    </div>
  )
}

export default About;