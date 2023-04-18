export function LoadMoreButton(props) {
  return <button onClick={() => props.setPage((oldpage) => oldpage + 1)}>Load 10 more {props.page}</button>;
}
