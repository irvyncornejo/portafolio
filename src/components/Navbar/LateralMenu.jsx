import * as React from 'react'

import '../../App.css'

import ReferencesLinks from '../ReferencesLinks'
import FormContact from '../Contact/FormContact'

const LateralMenu = () => {
  return (
    <>
      <div className='icon-bar'>
        <ReferencesLinks />
        <FormContact />
      </div>
    </>
  )
}

export default LateralMenu