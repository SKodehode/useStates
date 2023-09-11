import { useState } from "react"
import "../../styling/comments.css"

export default function Comments() {
    const [comment, setComments] = useState({
        displayName: "Display name..",
        inputText: "Comment.."
    });

    function handleDisplayName(e) {
        setComments({
            ...comment,
            displayName: e.target.value
        });
    }

    function handleInputText(e) {
        setComments({
            ...comment,
            inputText: e.target.value
        });
    }
    
    return (
        <>
            <div className="comment-section">
                <h3 className="comment-title">Post a comment</h3>
                <input className="input display-name" value={comment.displayName} onChange={handleDisplayName}/>
                <textarea className="input comment-text" value={comment.inputText} onChange={handleInputText}/>
                <div className="preview">
                    <p class="preview-title">Comment preview</p>
                    <p className="displayname-preview">{comment.displayName}</p>
                    <hr class="rounded"></hr>
                    <p className="comment-preview">{comment.inputText}</p>
                </div>
            </div>
        </>
    )
}