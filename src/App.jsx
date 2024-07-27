import Header from './Header.jsx'
import Home from './Home.jsx'
import MyComponent from './MyComponent.jsx'
import List from './List.jsx'
import Card from './Card.jsx'
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
      <Home></Home>
      <List items={fruit} category="Fruits"/>
      <MyComponent></MyComponent>
      <Card img="https://pngimg.es/d/dog_PNG2449.png" alt="Little diggie that looks like negrita" title="Nigga card" text="This is a card component that loves negrita" isLover={true}/>
      <Card img="https://upload.wikimedia.org/wikipedia/commons/b/b7/Edificio_FAMAF_%28UNC%29.jpg" alt="FaMAF picture" title="Man I Love FaMAF" text="This is a card component that loves FaMAF" isLover={false}/>
      <Card img="https://pngimg.es/d/dog_PNG2449.png" alt="Little diggie that looks like negrita" title="Nigga card" text="This is a card component that loves negrita" isLover={true}/>
      <Card img="https://pngimg.es/d/dog_PNG2449.png" alt="Little diggie that looks like negrita" title="Nigga card" text="This is a card component that loves negrita" isLover={true}/>
      <Button></Button>
      <Footer></Footer>
    </>
  );
}

export default App
