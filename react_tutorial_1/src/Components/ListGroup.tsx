function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    //fragment
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {/* <ul ClassName="list-group">
        <li ClassName="list-group-item">An item</li>
        <li ClassName="list-group-item">A second item</li>
        <li ClassName="list-group-item">A third item</li>
        <li ClassName="list-group-item">A fourth item</li>
        <li ClassName="list-group-item">And a fifth one</li>
      </ul>  */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
