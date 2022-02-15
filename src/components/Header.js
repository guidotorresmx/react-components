
function Header(props) {
  return (
    <div className="Header">
      <header className="main-header">
      <section className="blog-name">
        <h1>{props.blogName}</h1>
      </section>
      <section className="blog-options">
        <ul>
          <li>{props.page1}</li>
          <li>{props.page2}</li>
          <li>{props.page3}</li>
        </ul>
      </section>  
      </header>
    </div>
  );
}

export default Header;
