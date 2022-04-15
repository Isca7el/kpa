import { useState} from 'react';
import Modal from '../modal/modal';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequest } from '../reducer/saga reducer';
import './App.css';

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [term, setTerm] = useState([]);
  const [toggle, setToggle] = useState('');
  const list = useSelector(state => state.list);
  const req = useSelector(state => state.fetch)
  const dispatch = useDispatch();


  function compareArray (tar){
    
  }

  const TooggleSwitch = (e) => {
    const target = e.target.id;
    setTerm(oldArray => [...oldArray, target] )
    const filterArr = term.filter(item => item === target);
    console.log(term);
    console.log(e.target);
  }

  return (
    <div className="app">
      <button className="add" onClick={() => {
        setModalActive(true);
        console.log('open')}}>Добавить</button>
      <button className="delete">Удалить</button>
      <button className="test" onClick={() => dispatch(fetchRequest())}>Тест GraphQL</button>
      { list.length > 0 ?
              <div  onClick={TooggleSwitch} >
                {list.map((item, index) =>
                  <div id={uuid()} key={uuid()}>{item.name}</div> 
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
