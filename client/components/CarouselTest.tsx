import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import './App.css'
const images = [
  'https://i.pinimg.com/564x/6d/61/ca/6d61ca60332d4a8adf4736bc7f076ffc.jpg',
  'https://i.pinimg.com/564x/ab/e7/6a/abe76a7dd4888c05553405fdd26bf426.jpg',
  'https://i.pinimg.com/564x/63/c5/d6/63c5d6812202928f589fb2ca38415110.jpg',
]
function CarouselTest() {
  return (
    <div className="carouselBox">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, i) => (
          <div className="slide" key={i}>
            <img alt="sample_file" src={URL} key={i} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default CarouselTest
