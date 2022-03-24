import React from 'react'
import "./Rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
       <>
          <div className="birthDayContainer">
            <img src={`${PF}gift.png`} alt="" className='birthDayImg'/>
            <span className="birthDayText"><b>Pola Foster</b> and <b>3 other friends </b> have a birth day</span>
          </div>
          <img src={`${PF}ad.png`} alt="" className="rightBarAd" />
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
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
            <img src={`${PF}person/1.jpeg`} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Majd Rada</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/2.jpeg`} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Wafi Rada</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/3.jpeg`} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Talat</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Zahi</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/5.jpeg`} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName"> Shihab</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/6.jpeg`} alt="" className="rightBarFollowingImg" />
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