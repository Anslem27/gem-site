import Slider from 'react-slick'
import OpenCollective from '../../icons/companies/opencollective'
import Eaze from '../../icons/companies/eaze'
import MagicLeap from '../../icons/companies/magic-leap'
import Trulia from '../../icons/companies/trulia'
import MozillaVR from '../../icons/companies/mozilla-vr'

const settings = {
  customPaging: () => null,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: () => null,
  prevArrow: () => null,
  pauseOnFocus: false,
  pauseOnHover: false,
  focusOnSelect: false,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
};

export default () => (
  <div className="unique-slider">
    <Slider {...settings}>
      <div style={{ width: 388 }}><OpenCollective /></div>
      <div style={{ width: 140 }}><Eaze /></div>
      <div style={{ width: 176 }}><MagicLeap /></div>
      <div style={{ width: 180 }}><Trulia /></div>
      <div style={{ width: 238 }}><MozillaVR /></div>
    </Slider>
    <style jsx>{`
      .unique-slider div {
        cursor: default;
        outline: none;
      }
    `}</style>
  </div>

)
