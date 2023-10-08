import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

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
    </div>
  );
}

export default App;
