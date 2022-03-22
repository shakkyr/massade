import React from 'react'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import './Home.css'


const Home = () => {
  return (
    <div className="homeContainer">
        <Sidebar />    
        <Feed />    
        <Rightbar />
    </div>
  )
}

export default Home
