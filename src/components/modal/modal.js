import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'react-notifications-component';

import './modal.css';

const Modal = ({active, setActive}) => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);


  useEffect(() => {
  }, )

  function Push() {
    Store.addNotification({
      title: 'Вами добавлен',
      message: 'Вы успешно добавили',
      type: 'success',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000
      }
    });
  }

  function PushErrorDate() {
    Store.addNotification({
      title: 'Вы не добавили',
      message: 'Вы не ввели ',
      type: 'warning',
      container: 'top-left',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000
      }
    });
  }
  
  const addItem = () => {
    const listItem = {
      name: input,
      id: uuid()
    }
    
    dispatch({type: "ADD_ITEM", payload: listItem})
  }

  const applyFunc = () => {
    if (input){
      addItem();
      setActive(false);
      Push();
      setInput("");
    } else {
      setActive(false);
      PushErrorDate();
    }
  }

  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            <input className="input" value={input} placeholder="Введите текст" onChange={e => setInput(e.target.value)}></input>
            <div className="modal__buttons">
              <button className="button-ok" onClick={() => applyFunc()}>Ok</button>
              <button className="button-cancel" onClick={() => setActive(false)}>Отмена</button>
            </div>
          </div>
      </div>
  )  
}

export default Modal;