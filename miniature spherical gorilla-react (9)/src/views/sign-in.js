import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-in - Miniature Spherical Gorilla</title>
        <meta
          property="og:title"
          content="Sign-in - Miniature Spherical Gorilla"
        />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/layers%20%5B2%5D-200h.png"
        className="sign-in-image"
      />
      <div className="sign-in-container1">
        <div className="sign-in-container2">
          <div className="sign-in-container3">
            <div id="firebase" className="sign-in-container4"></div>
            <img
              alt="image"
              src="/playground_assets/new%20project%20%5B3%5D%20%5B1%5D-500h.png"
              className="sign-in-image1"
            />
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/layers%20%5B7%5D-500w.png"
        className="sign-in-image2"
      />
      <img
        alt="image"
        src="/playground_assets/layers%20%5B1%5D-700w.png"
        className="sign-in-image3"
      />
      <img
        alt="image"
        src="/playground_assets/layers%20%5B3%5D-200w.png"
        className="sign-in-image4"
      />
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
      <img
        alt="image"
        src="/playground_assets/layers-200h.png"
        className="sign-in-image5"
      />
      <img
        alt="image"
        src="/playground_assets/layers%20%5B6%5D-200h.png"
        className="sign-in-image6"
      />
    </div>
  )
}

export default SignIn
