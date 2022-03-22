import React from 'react'
import './Post.css'
import {MoreVert} from '@material-ui/icons'
import { Users } from '../../dummyData'


const Post = ({post}) => {
  return (
    <div className='post'> 
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(usr => usr.id === post.userId)[0].profilePicture} alt="" className='postProfileImg'  />
                    <span className="postUserName">{Users.filter(usr => usr.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBpttomLeft">
                    <img src="/assets/like.png" alt="" className='likeIcon' />
                    <img src="/assets/heart.png" alt="" className='likeIcon' />
                    <span className="postLikeCounter">{post.like} people liked it</span>
                </div>
                <div className="postBpttomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post