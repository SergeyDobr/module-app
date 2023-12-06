import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const brands = [
  "https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png",
  "https://banner2.cleanpng.com/20190417/eoa/kisspng-logo-font-tesla-inc-typography-car-5cb7a2524c8954.3957115715555385143135.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
  "https://pngimg.com/d/nike_PNG12.png",
  "https://download.logo.wine/logo/Coca-Cola/Coca-Cola-Logo.wine.png",
  "https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png",
  "https://banner2.cleanpng.com/20190417/eoa/kisspng-logo-font-tesla-inc-typography-car-5cb7a2524c8954.3957115715555385143135.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
  "https://pngimg.com/d/nike_PNG12.png",
  "https://download.logo.wine/logo/Coca-Cola/Coca-Cola-Logo.wine.png",
];

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Количество отображаемых слайдов одновременно
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {brands.map((logo, index) => (
        <div key={index} style={{width:'50%'}}>
          <img className="d-block w-100" src={logo} alt='logo' />
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
