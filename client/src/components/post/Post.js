import React from 'react'
import './Post.css'
import {MoreVert} from '@material-ui/icons'

const Post = () => {
  return (
    <div className='post'> 
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className='postProfileImg'  />
                    <span className="postUserName">Shadi Rada</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> My first Post</span>
                <img className="postImg" src="/assets/post/1.jpeg" alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBpttomLeft">
                    <img src="/assets/like.png" alt="" className='likeIcon' />
                    <img src="/assets/heart.png" alt="" className='likeIcon' />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBpttomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post