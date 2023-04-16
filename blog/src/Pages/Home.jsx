function Home() {
    const mainTitle = "Welcome to the react blog";
    const likes = 76;

    function handleClick() {
        console.log("clicked");
    }

    return(
        <div className="home">
            <h1>{mainTitle}</h1>
            <p>Post liked by {likes} people</p>
            <button onClick={handleClick}>Clicky</button>
        </div>
    )
}

export default Home;