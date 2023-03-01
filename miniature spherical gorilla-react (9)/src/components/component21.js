import React from 'react'

import PropTypes from 'prop-types'

import './component21.css'

const Component21 = (props) => {
  return (
    <div className={`component21-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component21-image"
      />
    </div>
  )
}

Component21.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/new%20project%20%5B33%5D-200h.png',
}

Component21.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component21
