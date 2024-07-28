import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import Proyects from './Proyects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <div className="angle angle1"></div>
      <Proyects></Proyects>
      <div className="angle angle2"></div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App
