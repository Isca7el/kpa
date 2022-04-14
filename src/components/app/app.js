import { useState, useEffect } from 'react';
import Modal from '../modal/modal';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [term, setTerm] = useState('');
  const [toggle, setToggle] = useState('');
  const list = useSelector(state => state.list);

  const TooggleSwitch = (e) => {
    const target = e.target.id;
    setTerm(target);
    console.log(e.target.id)
  }

  return (
    <div className="app">
      <button className="add" onClick={() => {
        setModalActive(true);
        console.log('open')}}>Добавить</button>
      <button className="delete">Удалить</button>
      <button className="test">Тест GraphQL</button>
      { list.length > 0 ?
              <div  onClick={TooggleSwitch} >
                {list.map(item =>
                  <div id={uuid()} key = {uuid()}>{item.name}</div> 
                )}
              </div>
              :
              <div>Список пуст</div>
            }
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
