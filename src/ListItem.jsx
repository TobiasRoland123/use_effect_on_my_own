export function ListItem(props) {
  return (
    <>
      {props.articles.map((product) => (
        <li key={props.id}>
          <article>
            <img
              src={`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`}
              alt={`image of ${product.productdisplayname}`}
            />
            <h2>{product.productdisplayname}</h2>
            <h3>{`category: ${product.articletype}`}</h3>
            <p>{product.brandname}</p>

            <p>Price:{product.price}</p>

            <button onClick={() => props.addProduct(product)}>Add to cart</button>
          </article>
        </li>
      ))}
    </>
  );
}
