import React, { useState, useEffect } from 'react';
import './App.css';
import CommentComponent from './CommentComponent';

function App() {
  const [comments, setComments] = useState([
    {
      commentID:1,
      comment: 'good  click',
      liked: false
    },
    {
      commentID:2,
      comment: 'great post ',
      liked: true
    },
  ]);

  const [commIdGen, setCommIdGen] = useState(3);

  function addComment(comment){
    let com = {
      commentID: commIdGen,
      comment: comment,
      liked: false
    }

    comments.push(com);
    setCommIdGen(commIdGen + 1);
  }

  function handleCheck(e, commentID){
    let comm = comments.findIndex((comment) => {
      return comment.commentID === commentID;
    })

    comments[comm].liked = e.target.checked;

    setComments(comments);
    console.log(comments);
  }

  function deleteComment(commentId){
    let newComments = comments.filter((comment) => {
        return comment.commentID !== commentId;
    })
    console.log(commentId);
    console.log(newComments);
    setComments(newComments);
  }

  return (
    <div className="App">
      <div>
        <div className='post'>

        </div>
        <div className='comments-list'>
          <CommentComponent comments={comments} addComment={addComment} handleCheck={handleCheck} deleteComment={deleteComment}/>
        </div>
      </div>
    </div>
  );
}

export default App;
