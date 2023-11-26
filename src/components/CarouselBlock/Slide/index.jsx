import Carousel from 'react-bootstrap/Carousel';
import { forwardRef } from "react"

const Slide = forwardRef(({ src, alt, ...other}, ref) => {
   return (
      <Carousel.Item ref={ref}{...other}>
         <img style={{ objectFit: "cover" }}
            className="d-block w-100" src={src} alt={alt} 
         /> 
         <Carousel.Caption>
         </Carousel.Caption>
      </Carousel.Item>
   )
})

export default Slide