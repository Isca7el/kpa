import { useState } from "react";

import DeleteBtn from "../delete-btn/deleteBtn";
import AddBtn from "../add-btn/addBtn";
import TestGraph from "../test-graph/test-btn";
import List from "../list/list";
import "./App.css";

const App = () => {
  const [id, setId] = useState([]);

  const handleIID = (term) => {
    setId(term); 
  }

  return (
    <div className="app">
      <AddBtn />
      <DeleteBtn id={id}/>
      <TestGraph/>
      <List handleIID={handleIID}/>
    </div>
  );
};

export default App;
