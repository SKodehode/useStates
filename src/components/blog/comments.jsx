import { useState } from "react"
import "../../styling/comments.css"

/** 
 * This document contains our comment section component. 
 * 
 * We use another useState hook in this function to memorize the values inserted into the input field.
 * This allows the user to view the preview render without having to refresh the site while they type in a display name and their comment. 
*/
export default function Comments() {
    const [comment, setComments] = useState({
        displayName: "Display name..",
        inputText: "Comment.."
    });

    /* This function is responsible for rendering and updating the display name preview as the user types out their display name of choice.*/
    function handleDisplayName(e) {
        setComments({
            ...comment,
            displayName: e.target.value
        });
    }

    /* This function is responsible for rendering and updating the user's comment live while they type out their comment. */
    function handleInputText(e) {
        setComments({
            ...comment,
            inputText: e.target.value
        });
    }
    
    /* Return statement which contains the page struckture for the comment section. */
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