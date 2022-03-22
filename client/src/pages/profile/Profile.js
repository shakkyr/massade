import React from 'react'
import "./Profile.css"
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'

const Profile = () => {
  return (
    <div className='profile'>
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/7.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName"> Shadi Rada</h4>
                    <span className="profileInfoDesc"> Hello my friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>

        </div>

    </div>
  )
}

export default Profile