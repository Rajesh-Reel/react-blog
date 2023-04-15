function Navbar() {
    return(
        <nav className="navbar">
            <h1>Blog Title</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "black",
                    backgroundColor: "f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;