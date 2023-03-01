import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component2-image"
      />
    </div>
  )
}

Component2.defaultProps = {
  image_alt: 'image',
  image_src:
    '/playground_assets/image%20%5B9%5D%20%5B1%5D%20%5B1%5D%20%5B2%5D-200h.png',
  rootClassName: '',
}

Component2.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component2
