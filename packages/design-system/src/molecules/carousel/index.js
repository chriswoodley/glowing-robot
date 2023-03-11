import React from 'react'
import PropTypes from 'prop-types'

function Carousel({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node) || PropTypes.node
}

export default Carousel
