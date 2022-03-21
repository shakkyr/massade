import React from 'react'
import './Topbar.css'
import {Search, Person, Chat, Notifications} from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className="topBarContainer">
        <div className="topBarLeft"> 
            <span className="logo">Massade-Trips</span>
        </div>
        <div className="topBarCenter">
            <div className="searchBar">
              <Search/>
              <input placeholder='Find a Place Nearby' className="searchInput" />
            </div>
        </div>
        <div className="topBarRight"> 
            <div className="topBarLinks">
              <span className="topBarLink">HomePage</span>
              <span className="topBarLink">TimeLine</span>
            </div>
            <div className="topBarIcons">
              <div className="topBarItem">
                <Person/>
                <span className="topBarIconBaadge">
                  1
                </span>
              </div>
              <div className="topBarItem">
                <Chat/>
                <span className="topBarIconBaadge">
                  2
                </span>
              </div>
              <div className="topBarItem">
                <Notifications/>
                <span className="topBarIconBaadge">
                  1
                </span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topBarImage" />
        </div>
    
    </div>
  )
}

export default Topbar