import '../css/index.css';
import '../css/header.css';

function Header(props) {
  return (
    <div className="Header">
      <section className="blog-name">
        <h1>{props.blogName}</h1>
      </section>
      <section className="blog-options">
        <ul className='pages'>
          <li>{props.page1}</li>
          <li>{props.page2}</li>
          <li>{props.page3}</li>
        </ul>
      </section>  
    </div>
  );
}

export default Header;
