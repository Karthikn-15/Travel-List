import {useState} from "react";
export default function Form({OnAdd}) {
  const [description, SetDescription] = useState("");
  const [quantity, SetQuantity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!description) return;
    const Porul = {description, quantity, packed: false, id: Date.now()};
    console.log(Porul);
    OnAdd(Porul);
    SetDescription("");
    SetQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>what are all the things that we need!?</h3>
      <select
        value={quantity}
        onChange={(e) => SetQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Place Your things here!"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
