import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT =
[
  {
    id: 'p1',
    price: 89.2,
    title: 'Hand Cream',
    description : 'Really?!'
  },
  {
    id: 'p2',
    price: 79.2,
    title: 'Foot Cream',
    description : 'Really?!' 
  },
  {
    id: 'p3',
    price: 39.2,
    title: 'Face Cream',
    description : 'Really?!'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          />
        ))
        }
      </ul>
    </section>
  );
};

export default Products;
