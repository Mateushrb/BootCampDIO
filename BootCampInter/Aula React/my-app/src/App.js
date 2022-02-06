import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return (
    <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
      <li>
        <Item>
          Item 1
        </Item>
      </li>
      <li>
        <Item>
          Item 2
        </Item>
      </li>
      <li>
        <Item>
          Item 3
        </Item>
      </li>
    </ul>
    <Card />
    </>
  )
}

export default App;