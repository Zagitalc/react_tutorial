import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => console.log(event);
  //   items = [];
  //   const message = items.length === 0 ? <p>No item found</p> : null

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    //fragment
    <>
      <h1>{heading}</h1>
      {/* {getMessage(1)} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* <ul ClassName="list-group">
        <li ClassName="list-group-item">An item</li>
        <li ClassName="list-group-item">A second item</li>
        <li ClassName="list-group-item">A third item</li>
        <li ClassName="list-group-item">A fourth item</li>
        <li ClassName="list-group-item">And a fifth one</li>
      </ul>   */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={() => console.log("clicked")}
            // onClick={(event) => console.log(item, index)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
