import React from 'react'
import "./Rightbar.css"

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightBarWrapper">
          <div className="birthDayContainer">
            <img src="/assets/gift.png" alt="" className='birthDayImg'/>
            <span className="birthDayText"><b>Pola Foster</b> and <b>3 other friends </b> have a birth day</span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightBarAd" />
          <h4 className="rightBarTitle">Online Friends</h4>
          <ul className="rightBarFriendList">
            <li className="rightBarFrind">
              <div className="rightBarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className='rightBarProfileImg' />
                <span className="rightBarOnline"></span>
              </div>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default Rightbar