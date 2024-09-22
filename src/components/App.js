import {useState} from "react";

import Logo from "./logo";
import Form from "./Form";
import PackingList from "./Packing List";
import Stats from "./Stats";

// const initialItems = [
//   {id: 1, description: "Passports", quantity: 2, packed: true},
//   {id: 2, description: "Socks", quantity: 12, packed: false},
//   {id: 3, description: "Charger", quantity: 1, packed: true},
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function HandleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function HandleDelete(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function HandleToggleEvent(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }
  function ClearItems() {
    const Confirm = window.confirm(
      "Are You Sure You Want to Delete All Items?"
    );

    if (Confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form OnAdd={HandleAddItems} />
      <PackingList
        Items={items}
        onClear={ClearItems}
        onDelete={HandleDelete}
        onToggle={HandleToggleEvent}
      />
      <Stats items={items} />
    </div>
  );
}
