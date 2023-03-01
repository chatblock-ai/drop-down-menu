import React from 'react'

import PropTypes from 'prop-types'

import './component19.css'

const Component19 = (props) => {
  return <div className={`component19-container ${props.rootClassName} `}></div>
}

Component19.defaultProps = {
  rootClassName: '',
}

Component19.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component19
