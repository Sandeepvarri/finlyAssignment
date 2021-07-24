import React, {useState} from 'react'

function CommentComponent({ comments, addComment, deleteComment, handleCheck}) {
    const [showForm,setShowForm] = useState(false);
    const [comment,setComment] = useState('');
    
    const handleSubmit = (e) => {
            e.preventDefault();
            addComment(comment);
            setComment('');
    }
    return (
        <div>
            {comments.map((comment) => {
                return <div className='comment-item' key={comment.commentID}>
                    <div>comment: {comment.comment} 
                     <button onClick={() => deleteComment(comment.commentID)}>Delete comment</button></div>
                    <div>
                        <label>Liked <input type='checkbox' defaultChecked={comment.liked} onChange={(e) => handleCheck(e, comment.commentID)}/></label>
                    </div>
                    
                </div>
            })
            }
            {showForm? <form onSubmit={handleSubmit}>
                <label>Comment</label>
                <input type='text' name='comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button type='submit'>Post</button>
            </form> : null}
            <button onClick={() => setShowForm(!showForm)}>Add Comment</button>
        </div>
    )
}

export default CommentComponent
