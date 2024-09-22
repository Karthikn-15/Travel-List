import {useState} from "react";
import Item from "./Item";
export default function PackingList({Items, onDelete, onToggle, onClear}) {
  const [sortBy, setSortBy] = useState("input");
  let SortedItems;
  if (sortBy === "input") SortedItems = Items;
  if (sortBy === "description")
    SortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed")
    SortedItems = Items.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {SortedItems.map((i) => (
          <Item
            item={i}
            onDeleteItem={onDelete}
            onToggle={onToggle}
            key={i.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by status</option>
        </select>
        <button value={Items} onClick={onClear}>
          Clear List
        </button>
      </div>
    </div>
  );
}
