
import '../css/index.css';
import '../css/footer.css';
import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <header className="app-footer">
          <p>
            Copyleft. All rights unreserved.
          </p>
        </header>
      </div>
    );
  }
}

export default Footer;

