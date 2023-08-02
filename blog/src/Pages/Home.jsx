import { useState } from "react";

function Home() {
    const mainTitle = "Welcome to the react blog";
    const likes = 76;

    const [name, setName] = useState("Rajesh");
    const [age, setAge] = useState(31)
    const [blogs, setBlogs] = useState([
        { title: "First Blog", body: "lorem ipsum...", author: "Raj", id: 1 },
        { title: "Second Entry", body: "lorem ipsum...", author: "Mike", id: 2 },
        { title: "SF: Third Strike", body: "lorem ipsum...", author: "Tom", id: 3 }
    ]);

    function handleClick() {
        console.log("clicked");
        setName("Not Rajesh");
        setAge(35);
    }

    return(
        <div className="home">
            <h1>{mainTitle}</h1>
            <p>Post liked by {likes} people</p>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Clicky</button>
        </div>
    )
}

export default Home;