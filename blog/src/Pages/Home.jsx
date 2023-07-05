import { useState } from "react";

function Home() {
    const mainTitle = "Welcome to the react blog";
    const likes = 76;

    const [name, setName] = useState("Rajesh");

    function handleClick() {
        console.log("clicked");
        setName("Not Rajesh")
    }

    return(
        <div className="home">
            <h1>{mainTitle}</h1>
            <p>Post liked by {likes} people</p>
            <p>{ name }</p>
            <button onClick={handleClick}>Clicky</button>
        </div>
    )
}

export default Home;