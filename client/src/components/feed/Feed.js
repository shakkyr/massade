import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"
import { Posts } from '../../dummyData'

const Feed = () => {
  return (
    <div className="feed">
        <div className="feedWrapper">
        <Share />
        {Posts.map((ele) =>(
          <Post key={ele.id} post={ele} />
        ))}

        </div>
    </div>
  )
}

export default Feed