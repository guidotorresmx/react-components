
function Header(props) {
  return (
    <div className="Header">
      <header className="main-header">
      <section className="blog-name">
        <h1>{props.blogName}</h1>
      </section>
      <section className="blog-options">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Archives</li>
        </ul>
      </section>  
      </header>
    </div>
  );
}

export default Header;
