import { ListItem } from "./ListItem";

export function ProductList(props) {
  return (
    <>
      <h2> Product List</h2>
      <div className="list_wrapper">
        <ul>
          <ListItem articles={props.articles} basket={props.basket} addProduct={props.addProduct} />
        </ul>
      </div>
    </>
  );
}
