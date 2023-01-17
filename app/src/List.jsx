import { Carousel } from "react-bootstrap"
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'

function Slide() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        style={{ height: '90vh', backgroundPosition: 'center ', backgroundSize: 'cover' }}
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '90vh', backgroundPosition: 'center ', backgroundSize: 'cover' }}
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '90vh', backgroundPosition: 'center ', backgroundSize: 'cover' }}
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slide