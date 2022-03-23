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
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue"> Massade</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship: </span>
            <span className="rightBarInfoValue"> Married</span>
          </div>
        </div>
        <h4 className="rightBarTilte">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Majd Rada</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Wafi Rada</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Talat</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Zahi</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shihab</span>
          </div>
          <div className="rightBarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> wael</span>
          </div>
        </div>
      </>
      )
  }

  return (
    <div className='rightbar'>
        <div className="rightBarWrapper">
            {profile ? <ProfileRightBar /> : <HomeRightBar />}
        </div>
    </div>
  )
}

export default Rightbar