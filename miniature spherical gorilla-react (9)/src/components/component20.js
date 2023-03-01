import React from 'react'

import PropTypes from 'prop-types'

import './component20.css'

const Component20 = (props) => {
  return (
    <div className="component20-container">
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        autoComplete="0.0"
        className="input component20-textinput"
      />
    </div>
  )
}

Component20.defaultProps = {
  textinput_placeholder: 'placeholder',
}

Component20.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default Component20
