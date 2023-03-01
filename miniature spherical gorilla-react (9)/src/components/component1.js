import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component1-image"
      />
    </div>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/launch%20app%20%5B2%5D-200h.png',
  image_alt: 'image',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component1
