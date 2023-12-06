import Carousel from 'react-bootstrap/Carousel'
import Slide from "./Slide"
import slide1 from './../../images/slide_1.jpg';
import slide2 from './../../images/slide_2.jpg';
import slide3 from './../../images/slide_3.jpg';

const slideUrls = [slide1, slide2, slide3];
const CarouselBlock = () => {
   return (
      <Carousel style={{marginBottom:'40px'}}>
         {slideUrls.map((url, index) => (
            <Slide key={index} src={url} alt={`Slide ${index + 1}`} />
         ))}
      </Carousel>
   )

}

export default CarouselBlock