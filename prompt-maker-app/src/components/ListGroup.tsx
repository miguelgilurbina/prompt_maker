import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
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

// function App() {

//   };
//   return (
//     <div>
//      <Alert/>
//     </div>
//   );
// }

// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Paraguaná", "Barquisimeto", "Jurijurebo", "Curiana"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Ciudades con nombres caquetíos"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
