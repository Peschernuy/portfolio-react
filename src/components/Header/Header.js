import React from 'react'
import './Header.scss'

import avatar from '../../../src/images/userpic.jpg'

const Header = () => {
  return ( <>
     <header className="header container">
    <div className="header__inner">
      <div className="user">
        <div className="user-pic">
          <img src={avatar} alt="" />
        </div>
        <div className="user-desc">
          <div className="user-name">Koshmak Misha</div>
          <div className="user-cont"></div>
          <div className="skills">Skills: React, Redux, Redux-toolkit, JS ES6, HTML5, CSS3, Styled-components, SCSS, Gulp, Git, BEM, Auth0, Stripe, Netlify </div>
        </div>
      </div>
    </div>
  </header>
  </>
  )
}



export default Header