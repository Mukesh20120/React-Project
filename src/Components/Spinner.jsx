import spinner from '../Assets/SVG/spinner.svg'
import React from 'react'

function Spinner() {
  return (
     <div className=' bg-black opacity-50 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50'>
        <div>
            <img src={spinner} alt="loading..." className='h-24' />
        </div>
     </div>
  )
}

export default Spinner