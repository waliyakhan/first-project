import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function BasicExample() {
  return (
    <>
      <div className='div'>PRODUCTS</div>

      <Card className='main' style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" /img5.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>



      <Card className='main' style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" /img3.webp" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


      <Card className='main' style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" /img4.webp" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


 <Card className='main' style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" /img7.webp" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       <Card className='main' style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" /img8.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       <Card className='main' style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" /img9.avif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </>




  );
}

export default BasicExample;