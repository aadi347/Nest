import React from 'react'
import AddBlog from './AddBlog'
import TopGrids from './TopGrids'
import AuthorCard from './Components/Author'
import Banner from './Components/Banner'
import CreateShow from './Components/CreateShow'

const ManageBlog = () => {
  return (
    <div className=''>
      <Banner />
      {/* <AuthorCard /> */}
      <TopGrids />
      {/* <AddBlog/> */}
      <CreateShow />
    </div>
  )
}

export default ManageBlog