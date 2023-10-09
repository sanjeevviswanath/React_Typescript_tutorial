import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import produce from "immer";

let items = [
  "New York",
  "San Francisco",
  "Tokyo",
  "Trivandrum",
  "Madison",
  "Mountain House",
  "London",
  "Kochi",
];
const handleSelectItem = (item: string) => {
  console.log(item);
};
// const onClickAlertHandler = () => {
//   console.log("Clicked button");
// };
const msgInput = "Shweta";
const color = "primary";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [drink, setDrink] = useState({ title: "Coca cola", price: 5 });
  const [customer, setCustomer] = useState({
    name: "Sanjeev",
    age: 48,
    address: {
      street: "559 W Questa Trl",
      city: "Mountain House",
      zip: 95390,
    },
  });
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);
  const priceOnClick = () => {
    //If we do like this by changing just one property of the original
    //object, nothing happens. We should always pass a new object
    // drink.price = 10;
    // setDrink(drink);
    //Instead we should do the following:
    // const newDrink = {title: "Coca cola",price: 10}
    // setDrink(newDrink);
    //Other way to do that is:
    //const newDrink = { ...drink, price: 10 };
    setDrink({ ...drink, price: 10 });
  };
  const addressOnClick = () => {
    setCustomer({ ...customer, address: { ...customer.address, zip: 95391 } });
  };
  //Adding to an array
  const arrayAddOnClick = () => {
    setTags([...tags, "sad"]);
  };
  //Adding an intem within an array
  const arrayUpdateOnClick = () => {
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  //Deleting items within an array
  const arrayDeleteOnClick = () => {
    setTags(tags.filter((tag) => tag !== "sad"));
  };
  const bugOnClick = () => {
    //we can use the map function or immer way of doing it as below
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          List Group <span>Alert</span>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <Message msg={msgInput}></Message>
      <Button
        color={color}
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Alert On
      </Button>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
        fillColor="red"
        size={30}
      />
      <p>{drink.price}</p>
      <p>{customer.address.zip}</p>
      <p>{tags.toString()}</p>
      <p>{bugs[0].fixed ? "true" : "false"}</p>
      <button onClick={priceOnClick}>price update</button>
      <button onClick={addressOnClick}>address update</button>
      <button onClick={arrayAddOnClick}>Add to array</button>
      <button onClick={arrayUpdateOnClick}>Update an array</button>
      <button onClick={arrayDeleteOnClick}>Delete an array</button>
      <button onClick={bugOnClick}>Update Bug fixed</button>
    </div>
  );
}

export default App;
