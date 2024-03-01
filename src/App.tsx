import React from 'react';
import logo from './logo.svg';
//import './App.css';

import { useState } from 'react';

import List from './components/List/List';

import { useDispatch, useSelector } from "react-redux"
import { addContent } from './store/store';

function App() {

  const content = useSelector((state: any) => state.content);
  const dispatch = useDispatch();

  //const [content, setContent] = useState<Array<string>>([]);
  const [input, setInput] = useState<string>("");
  
  const add = () => {
    //setContent([...content, input]);
    dispatch(addContent({input: input, id: content.length}));
  }


  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <input onChange={onchange} type="text" placeholder="" />
      <button onClick={add}>Add</button>
      <br></br>
      {
        content.map((item: any, index: number) => {
          return <List key={index} content={item.input} idx={index} />
        })
      }
    </div>
  );
}

export default App;
