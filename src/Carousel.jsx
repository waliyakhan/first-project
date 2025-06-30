import Carousel from 'react-bootstrap/Carousel';



function MyCarousel() {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={'100%'} height={"500px"} style={{objectFit:"cover"}} src="/img 1.avif" alt="" />

                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={'100%'} height={"500px"} style={{objectFit:"cover"}} src="/img2.webp" alt="" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={'100%'} height={"500px"} style={{objectFit:"cover"}} src="/img4.webp" alt="" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default MyCarousel