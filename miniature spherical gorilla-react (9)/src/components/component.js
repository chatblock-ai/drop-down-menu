import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: '/playground_assets/layers%20%5B4%5D-200h.png',
  rootClassName: '',
  image_alt: 'image',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
