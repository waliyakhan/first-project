import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.jsx';
import BasicExample from './Card.jsx'
import About from './About.jsx'
import MyCarousel from './Carousel.jsx';
import Footer from './Footer.jsx'
function App() {
  return (
    <>
      <div >
        <Nav />
        <MyCarousel/>

        <About />
        <div className='row'>
          <BasicExample />
        </div>
         <Footer/>
      </div>

    </>
  );
}


export default App;

