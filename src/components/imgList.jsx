import React from 'react';
import ImageCard from './imageCard.jsx';
import './imageList.css';
const ImgList = (props)=>{
  const images = props.images.map((image)=>{
    return(
      <div className ='col-lg-6 col-sm-12 col-md-12' >
      <ImageCard key={image.id} image ={image} />
      </div>
     )
  })
  return(
    <div  >
    <h4> searched images are </h4>
    <hr/>
    <div className='container'>
    <div className='row'>
       {images}
    </div>
    </div>
    </div>

  )
}
export default ImgList ;
