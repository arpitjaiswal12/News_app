import React from 'react'
import loding from "../spinner.gif"
const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loding} alt="loding" style={{ width: "50px", height: "50px" }} />
    </div>
  )
}

export default Spinner
