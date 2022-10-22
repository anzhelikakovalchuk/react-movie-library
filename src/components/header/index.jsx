import React from 'react'

import Button from '../button'
import Title from '../title'

function Header () {
  return (
    <div className="header relative flex flex-row justify-between items-center py-5 px-16">
      <Title />
      <Button theme="default">+ Add Movie</Button>
    </div>
  )
}

export default Header;
