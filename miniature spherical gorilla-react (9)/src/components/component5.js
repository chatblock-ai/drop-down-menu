import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className={`component5-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component5-image"
      />
    </div>
  )
}

Component5.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/image%20%5B10%5D%20%5B1%5D%20%5B3%5D-200h.png',
  rootClassName: '',
}

Component5.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component5
