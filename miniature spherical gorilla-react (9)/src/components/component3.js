import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component3-image"
      />
    </div>
  )
}

Component3.defaultProps = {
  image_src: '/playground_assets/discord%20icon%20%5B3%5D-200h.png',
  image_alt: 'image',
  rootClassName: '',
}

Component3.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component3
