import React from 'react'
import Figure from 'react-bootstrap/Figure';
import "bootstrap/dist/css/bootstrap.css";
import img1 from "./img1.jpg"
import img2 from "./img2.jfif"
import "./Banner.css";

export default function Banner() {
  return (

      <Figure>
<div className="imagestyles">
          <Figure.Image
              width={900}
              height={180}
              alt="171x180"
              src={img1}
          />
</div>
          <div className="imagestyles">
              <Figure.Image
                  width={900}
                  height={180}
                  alt="171x180"
                  src={img2}
              />
          </div>

      </Figure>




  )
}
