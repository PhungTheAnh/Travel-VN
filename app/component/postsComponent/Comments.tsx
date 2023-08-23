import React from 'react';
import Comment from "@/app/component/postsComponent/Comment";
import FormComment from "@/app/component/postsComponent/FormComment";
import {comments} from "@/app/component/data/data";
import {v4 as uuidv4} from 'uuid';
import {IComment} from "@/app/component/types/IComment";

const Comments = () => {
  return (
    <div>
      <div>
        {
          comments.map((comment: IComment) => {
            return <Comment key={uuidv4()} author={comment.author} image={comment.image} date={comment.date} content={comment.content}/>
          })
        }
      </div>
      <FormComment/>
    </div>
  );
};

export default Comments;