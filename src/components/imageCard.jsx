import React from 'react';
import './imageCard.css'

class ImageCard extends React.Component{


  render(){
    return(
      <div >
      <img
      className ='imgcard'
      alt = {this.props.image.description}
      src={this.props.image.urls.regular}

      />
      </div>
    )
  }
}
export default ImageCard;
//
