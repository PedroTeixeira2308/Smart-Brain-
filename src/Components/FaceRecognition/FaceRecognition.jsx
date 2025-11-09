import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, onImageLoad }) => {
  if (!imageUrl) return null;
  return (
    <div className="fr-root">
      <div className="fr-container">
        <img
          id="inputImage"
          alt="face-imaage"
          src={imageUrl}          
          height="auto"
          onLoad={onImageLoad}   
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;







//Old Code
// import React from 'react';
// import './FaceRecognition.css'



// const FaceRecognition = ({imageUrl, box, onImageLoad}) => {

//   return(
//     <div className='center ma'>
//       <div className='absolute mt2'>
//         <img id='inputImage' alt='' src='{imageUrl}' width='500px' height='auto' onLoad={onImageLoad}></img>
//         <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
//       </div>
//     </div>
//   );
// }


// export default FaceRecognition;