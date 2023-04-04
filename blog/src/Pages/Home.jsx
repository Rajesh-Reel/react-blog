function Home() {
    const mainTitle = "Welcome to the react blog";
    const likes = 76;

    return(
        <div className="home">
            <h1>{mainTitle}</h1>
            <p>Post liked by {likes} people</p>
        </div>
    )
}

export default Home;