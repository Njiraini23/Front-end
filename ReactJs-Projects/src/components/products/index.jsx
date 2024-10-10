import { useState, useEffect } from "react";
import ProductItem from "./components/product-item";
import './style.css'; 

const initialState = false;

function ProductList({ name, city, listOfProducts }) {
    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0);
    const [changeStyle, setchangeStyle] = useState(false);

    const handleToggleText = () => {
        setFlag(!flag)
    }

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

    useEffect(()=>{
        setFlag(!flag)
       console.log('run only oce on page load');

       return () => {
        console.log('component is unmounted');
       }
    }, [])

    useEffect(()=>{
        if(count === 10) {
            setchangeStyle(true);
        }
    }, [count])

    console.log(changeStyle);

    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem /> */}
            {flag ? (
                <h4>
                    {name} and {city}
                </h4>
            ) : (
            <h4>Hello</h4>
                )}
                <div>
                    <button style={{backgroundColor : changeStyle ? 'black' : 'blueviolet', color : changeStyle ? 'orangered' : 'whitesmoke'}} onClick={handleIncreaseCount}>Increase Count</button>
                    <p>Count is {count} </p>
                </div>
            <ul>
                {listOfProducts.map((item, index) => (
                <ProductItem singleProductItem={item} key={index} />
            ))}
            </ul>
        </div>
    )
}

export default ProductList;