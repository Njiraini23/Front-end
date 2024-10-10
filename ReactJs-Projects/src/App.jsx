import './App.css';
import ProductList from './components/products/index';


const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  

  return (
    <div>
      <h1>React JS APP</h1>
     
      {/* <ClassBasedComponent /> */}
      <ProductList listOfProducts={dummyProductData} name="Kennedy" city="Nairobi" /> 
    </div>
  )
}

export default App
