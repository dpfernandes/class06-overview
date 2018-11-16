import React, { Component } from 'react';
import PostData from './PostData.json';

class PostList extends Component {
    render() {
      return (
            <div>
                {PostData.map((postDetail, index)=>{
                    return <p>{postDetail.name}  </p>
                    })}
            </div>
            )
            }
}

export default PostList;
