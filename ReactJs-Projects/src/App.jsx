import './App.css'; 
import LoginComponent from './components/login';
import RegisterComponent from './components/register';



function App() {
  

  return (
    <div>
      <h1>React JS APP</h1>
       {/* <FormComponent />
       {/* <UseReducerExample /> */}
      {/* <ContextButtonComponent /> */}
      {/* <ContextTextComponent /> */}
     {/* <Users /> */}
      {/* <ClassBasedComponent /> */}
      {/* <ProductList listOfProducts={dummyProductData} name="Kennedy" city="Nairobi" /> */}
     <div style={{display : 'flex', gap : '20px' }}>
      <LoginComponent />
      <RegisterComponent /> 
     </div>
    </div>
  )
}

export default App
