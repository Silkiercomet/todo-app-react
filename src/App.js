import './App.css';
import Header from './Header/Header'
import TodoContainer from './Todo__container/TodoContainer'
import {useState, useContext, useEffect} from 'react'
import { ThemeContext } from './Theme/ThemeContext';



function App() {
//--------------------Hooks------------------>

  const [items, setItem] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  const [newItems, setNewItems] = useState("");
  const [active,setActive] = useState(0);

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])
  useEffect(() => {
    console.log(active)
  }, [active])
//------------------------------------------->
//-----------------functions----------------->
  const setstorage = (x) => {
    //x an array with the todo's
    setItem(x);
    localStorage.setItem("shoppinglist", JSON.stringify(x));
  };
  const AddToList = (item) => {
    //add new items
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const myNewList = [...items, myNewItem];
    setstorage(myNewList);
  };
  const HandleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setstorage(listItems);
  };

  const HandleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setstorage(listItems);
  };
  const HandleSubmit = () => {

    if (!newItems) return;
    //add item
    AddToList(newItems);
    setNewItems("");
  };
//------------------------------------------->

  return (
    <body className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

      <Header isDark={isDark}/>
      <TodoContainer 
        items={items}
        isDark={isDark} 
        toggleTheme={toggleTheme}
        newItems={newItems}
        setNewItems={setNewItems}
        HandleSubmit={HandleSubmit}
        HandleCheck={HandleCheck}
        HandleDelete={HandleDelete}
        setActive={setActive}
        active={active}
        setItem={setItem}
      />

      
    </body>
  );
}

export default App;
