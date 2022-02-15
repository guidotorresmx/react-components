import '../css/index.css';
import '../css/picture.css';
import profile from '../img/profile.jpg';
import React from 'react';


class Picture extends React.Component{
  render(){
    return (
      <div className="picture">
        <img className='profile' src={profile} alt="Marco Guido" />
      </div>
    );
  }
}

export default Picture;
