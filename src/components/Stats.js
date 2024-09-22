export default function Stats({items}) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Pick Up Your favourite things that you won't miss in the trip😉</em>
      </p>
    );
  const NumItem = items.length;
  const NumPacked = items.filter((items) => items.packed).length;
  return (
    <footer className="stats">
      <em>
        You Have {NumItem} {NumItem > 1 ? "items" : "item"} on your List, and
        you already Packed {NumPacked} {NumPacked > 1 ? "items" : "item"}
      </em>
    </footer>
  );
}
