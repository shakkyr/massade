import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    return (
       <>
          <div className="birthDayContainer">
            <img src="/assets/gift.png" alt="" className='birthDayImg'/>
            <span className="birthDayText"><b>Pola Foster</b> and <b>3 other friends </b> have a birth day</span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightBarAd" />
          <h4 className="rightBarTitle">Online Friends</h4>
          <ul className="rightBarFriendList">
            {Users.map(usr=> (
              <Online key={usr.id} user={usr}/>
            ))}
            

          </ul>
       </>
      )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Town: </span>
            <span className="rightBarInfoValue"> Massade</span>
          </div>
        </div>
      </>
      )
  }

  return (
    <div className='rightbar'>
        <div className="rightBarWrapper">
            <ProfileRightBar />
        </div>
    </div>
  )
}

export default Rightbar