export function BasketItem(props) {
  console.log(props.ProductCount);
  return (
    <>
      <li className="basket_item">
        <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt="" />
        <h3>{props.product.productdisplayname}</h3>
        <p>{props.product.price} kr</p>

        <button onClick={() => props.removeProduct(props.product.id)}>Remove</button>
      </li>
    </>
  );
}
