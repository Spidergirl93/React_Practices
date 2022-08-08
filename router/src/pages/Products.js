import { Link } from "react-router-dom";

const DUMYY_PRODUCTS = [
    {
        id: 'p1',
        title: 'Book',
        Price: 66.99
    },
    {
        id: 'p2',
        title: 'Chair',
        Price: 33.66
    },
    {
        id: 'p3',
        title: 'Earbud',
        Price: 99.99
    },
    {
        id: 'p4',
        title: 'Pizza',
        Price: 10.99
    }
]

const Products = () => {

    const productList = <ul>{DUMYY_PRODUCTS.map((product) => (
        <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link></li>
    ))}</ul>

    return(
        <div>
            {productList}
        </div>
    );
};


export default Products;