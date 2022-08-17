import React /* , { useContext } */ from "react";
import { useStore } from "../../hooks-store/store";
/* import { ProductsContext } from "../../contexts/products-context"; */
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = React.memo((props) => {
  const dispatch = useStore(false)[1];

  console.log("Rendering");

  /* const { toggleFav } = useContext(ProductsContext);
   */

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
    /* toggleFav(props.id); */
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
