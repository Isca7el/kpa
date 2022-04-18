import { useState } from "react";

import DeleteBtn from "../delete-btn/deleteBtn";
import AddBtn from "../add-btn/addBtn";
import TestGraph from "../test-graph/test-btn";
import List from "../list/list";
import "./App.css";

const App = () => {
  const [filterList, setFilterList] = useState([]);


  const deleteItems = (arr, filt) => {
    const s = new Set(filt.map((e) => JSON.stringify(e)));
    return arr1.filter((e) => !s.has(JSON.stringify(e)));
  };

  return (
    <div className="app">
      <AddBtn />
      <DeleteBtn />
      <TestGraph/>   
      <List />
    </div>
  );
};

export default App;

const arr1 = [
  { id: "cd0b4e3c-6865-4d0b-bb54-a7ee5ee4c220", name: "546546" },
  { id: "b111901e-b0a2-4c28-806c-ed1fa7520375", name: "fdgfd" },
  { id: "bf7eab66-7e88-4b7b-b2fc-fb291bfef740", name: "dsfdfsffd" },
];
const arr2 = [
  "b111901e-b0a2-4c28-806c-ed1fa7520375",
  "bf7eab66-7e88-4b7b-b2fc-fb291bfef740",
];

const result = arr1.filter((item) => !arr2.includes(item.id));

console.log(result);
