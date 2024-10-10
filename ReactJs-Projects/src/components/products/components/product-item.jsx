function ButtonComponent() {
    return <button>Click</button>;
}


const ProductItem = ({ singleProductItem, key }) => {
    return (
        <div key={key}>
        <p>{singleProductItem}</p>
        <ButtonComponent />
    </div>
    );
}

export default ProductItem;