// import Message from "./Message";
import ListGroup from "./Components/Listgroup";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
  // return <div> <Message ></Message></div>;
}
export default App;
