import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style/footer.scss';

library.add(fab, faYoutube, faInstagram )

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className='footer__copyrights'>Copyrights © 2018 - Design by Son Nguyen</div>
    </footer>
  );
}

export default Footer;