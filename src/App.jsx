import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import Proyects from './Proyects.jsx'
import MyComponent from './MyComponent.jsx'
import List from './List.jsx'
import Button from './Button/Button.jsx';
import Footer from './Footer.jsx'

function App() {

  const fruit = [{id: 1, name: "apple", calories: 32},
                {id: 2, name: "orange", calories: 54},
                {id: 3, name: "coconut", calories: 109},
                {id: 4, name: "banana", calories: 189},
                {id: 5, name: "grape", calories: 45},
                {id: 6, name: "lemon", calories: 129}];

  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <div className="angle angle1"></div>
      <Proyects></Proyects>
      <div className="angle angle2"></div>
      <List items={fruit} category="Fruits"/>
      <MyComponent></MyComponent>
      <Button></Button>
      <Footer></Footer>
    </>
  );
}

export default App
