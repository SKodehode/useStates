import { useState } from "react";
import { dataArray } from "../../data/data";

function Post() {
    const [index, setIndex] = useState(0);

    function nextPost() {
        setIndex(index + 1);
    }

    function previousPost() {
        setIndex(index - 1);
    }

    let post = dataArray[index];
    return (
        <>
            <p className="post-indicator">({index + 1} of {post.length})</p>
            <div className="post-card">
                <button className="previous-post" onClick={previousPost()}>Previous</button>
                <div className="post-wrapper">
                    <img className="post-image" src="{post.image}"/>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-description">{post.description}</p>
                    <p className="post-timestamp">Posted<br></br>{post.timestamp}</p>
                </div>
                <button className="next-post" onClick={nextPost()}>Next</button>
            </div>
        </>
    )
}