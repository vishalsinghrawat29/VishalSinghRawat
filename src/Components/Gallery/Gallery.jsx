import image1 from "./../../assets/image1.jpg";
import image2 from "./../../assets/image2.png";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.webp";
import image5 from "./../../assets/image5.jpg";
import image6 from "./../../assets/image6.jpg";

import "./Gallery.css";
const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="item-1">
          <img src={image1} alt="image-1" />
        </div>
        <div className="item-2">
          <img src={image2} alt="image-2" />
        </div>
        <div className="item-3">
          <img src={image3} alt="image-3" />
        </div>
        <div className="item-4">
          <img src={image4} alt="image-4" />
        </div>
        <div className="item-5">
          <img src={image5} alt="image-5" />
        </div>
        <div className="item-6">
          <img src={image6} alt="image-6" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
