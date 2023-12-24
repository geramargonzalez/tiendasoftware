
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CardWidget/CartWidget';

function App() {
  return (
    <>
    <ItemListContainer saludo='Hello there' despedida='Goodbye BABY'>
  
    </ItemListContainer>

    <CartWidget bodyCart='This is test'></CartWidget>

    </>
  );
} 

export default App;
