import React, { createContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const List = ({handleIID}) => {
  const list = useSelector((state) => state.list.list);
  const [term, setTerm] = useState([]);
  const [isSelected, setSelected] = useState(false);

  const TooggleSwitch = (e) => {
    setSelected(!isSelected)
    const target = e.target.id;
    term.includes(target)
      ? setTerm(term.filter((item) => item !== target))
      : setTerm((oldArray) => [...oldArray, target]);
  };

  handleIID(term);

  return list.length > 0 ? (
    <div className="list" onClick={TooggleSwitch}>
      {list.map((item) => (
        <div
            className={isSelected ? "border" : "unborder"}
            id={item.id}
            key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  ) : (
    <div>Список пуст</div>
  );
};

export default List;
