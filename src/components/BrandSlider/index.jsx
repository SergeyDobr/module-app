import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  "https://www.webex.com/content/dam/wbx/us/images/rebrand/nav-footer/black.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/2560px-Levis-logo-quer.svg.png",
  "https://logo.com/image-cdn/images/kts928pd/production/92bfed594e672cb48f6e7f534967ac8ba3db28a3-1200x392.png?w=1080&q=72"
];

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    cssEase: "linear",
  };

  return (
    <Slider className="mb-5" {...settings}>
      {brands.map((logo, index) => (
        <div key={index}>
          <img className="d-block w-100" src={logo} alt="logo" />
        </div>
      ))}
    </Slider>
  );
};

export default BrandSlider;
