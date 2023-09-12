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
     * At the bottom there's a resetPostCount function that's used with a button in order to reset the post count to 0. Returning the user back to the first post.
     * There could be better ways to acomplish that result but I chose to use this method.
     */

    /* This function increases the increment value by 1 every time the user clicks on the next post button. It is by incrementing the index number that allows the user to browse through each "post" in the data array. */
    function nextPost() {
        const nextIndex = (index + 1) % dataArray.length;
        setIndex(nextIndex);
    }

    /* This function decreases the index value by 1 every time the user clicks on the previous post button. And by decrementing the index number the user is able to browse to the previous post in data array or browse the posts backwards.  */
    function previousPost() {
        const previousIndex = (index - 1 + dataArray.length) % dataArray.length;
        setIndex(previousIndex);
    }

    /* This function is responsible for setting the index value back to zero. This function is working together with a reset button and it is used to reset the index values to 0 so that the user may return to the very first post. */
    function resetPostCount() {
        setIndex(0)
    }

    /* A let variable used to give the dataArray a shorter name. */
    let post = dataArray[index];
    
    /**
     * This is the body of our post component.
     * Here we have buttons in the form of icons. These are used to navigate between the different posts in the dataArray.
     * Further down we have the post-wrapper container wrapping up the blog posts into cards.
     * Creating elements that use the dataArray's properties to fill them with content.  
     */
    return (
        <>
            <img className="button left-button" src="./images/icons/left_icon.svg" alt="" onClick={previousPost} />
            <div className="post-card">
                <div className="post-wrapper">
                    <h1 className="post-title">{post.title}</h1>
                    <img className="post-image" src={post.image}/>
                    <p className="post-description">{post.description}</p>
                    <p className="post-indicator">({index + 1} of {dataArray.length})</p>
                    <button className="reset-button" onClick={resetPostCount}>Reset</button>
                    <p className="post-timestamp">Posted<br></br>{post.timestamp}</p>
                </div>
            </div>
            <img className="button right-button" src="./images/icons/right_icon.svg" alt="" onClick={nextPost} />
        </>
    )
}

export default Posts