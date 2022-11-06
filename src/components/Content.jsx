import React from 'react'

import TabView from './TabView'

function Content({ movies }) {
  return (
    <div className="content px-16 mt-2.5 bg-gray-dark flex-1">
      <TabView movies={movies} />
    </div>
  )
}

export default Content
