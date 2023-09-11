/**
 * This document is responsible for gathering and manipulating data from our data.jsx document which contains blogpost contents.
 *  
 * We have also imported a useState hook from React itself and we will be using it for our component so that the function can memorize it's state and render new content.
 * In this example we increment and decrement the index value of an array. We do this to display various blog posts stored inside our object array.
 * However if we increase or decrease the index value without the use of this hook the new content won't render. We could add a function that would render our page, and that wouldn't work as intended.
 * It would render our page which would reset our index position. So if we were to go from the first post to the second one, we would be thrown back to the first one upon rendering.
 * 
 * Now using a useState hook from React our page can memorize it's state and render the contents again without forgetting where it left of. 
 * Meaning if we were to swap from the first post to the second one, our position would be memorized and the content contained in the second object of our array will be displayed. 
 */
import { useState } from "react";
import dataArray from "../../data/data";
import "../../styling/posts.css"

function Posts() {
    const [index, setIndex] = useState(0);

    /** A function to increment our index position by 1. Moving us to the next post.
     * We added % dataArray.length to this so that the index value would be divided by the array length to ensure that when the user
     * reaches the final post and clicks next, they would wrap around to the first one.
     */
    function nextPost() {
        const nextIndex = (index + 1) % dataArray.length;
        setIndex(nextIndex);
    }

    function previousPost() {
        const previousIndex = (index - 1 + dataArray.length) % dataArray.length;
        setIndex(previousIndex);
    }

    let post = dataArray[index];
    return (
        <>
            <img className="button left-button" src="./images/icons/left_icon.svg" alt="" onClick={previousPost} />
            <div className="post-card">
                <div className="post-wrapper">
                    <h1 className="post-title">{post.title}</h1>
                    <img className="post-image" src={post.image}/>
                    <p className="post-description">{post.description}</p>
                    <p className="post-indicator">({index + 1} of {dataArray.length})</p>
                    <p className="post-timestamp">Posted<br></br>{post.timestamp}</p>
                </div>
            </div>
            <img className="button right-button" src="./images/icons/right_icon.svg" alt="" onClick={nextPost} />
        </>
    )
}

export default Posts