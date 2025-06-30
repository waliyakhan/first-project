import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css';

import React from 'react'

function About() {
  return (
    <div>
       <Card className="text-center " style={{ width: '50rem', marginTop:'50px',marginLeft:'220px' }} >
      <Card.Header className='header'>ABOUT</Card.Header>
      <Card.Body className='body'>
   
        <Card.Text>
          Enhancing natural beauty with carefully crafted, skin-loving cosmetics.
Our products blend elegance, purity, and performance for radiant confidence every day.
        </Card.Text>
        <Button variant="primary" style={{ color:'white', backgroundColor:'black',  }}>ABOUT US</Button>
      </Card.Body>
   
    </Card>
    </div>
  )
}

export default About