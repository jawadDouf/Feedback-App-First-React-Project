import React from 'react'

function button(props) {
  return (
    <button  className={`btn btn-`}>{props.children}</button>
  )
}

export default button