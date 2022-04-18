import { useState, useContext } from "react";
import { useSelector } from "react-redux";

const List = () => {
  const [toggle, setToggle] = useState(false);
  const list = useSelector((state) => state.list);
  const [term, setTerm] = useState([]);


  const TooggleSwitch = (e) => {
    const target = e.target.id;
    term.includes(target)
      ? setTerm(term)
      : setTerm((oldArray) => [...oldArray, target]);
    toggle ? setToggle(false) : setToggle(true);
  };

  return list.length > 0 ? (
    <div onClick={TooggleSwitch}>
      {list.map((item) => (
        <div
        //   className={toggle ? "border" : "unborder"}
          id={item.id}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
    </div>
  ) : (
    <div>Список пуст</div>
  );
};

export default List;
