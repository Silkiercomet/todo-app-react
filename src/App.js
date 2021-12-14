import './App.css';
import Header from './Header/Header'
import TodoContainer from './Todo__container/TodoContainer'
import {useState, useContext, useEffect} from 'react'
import { ThemeContext } from './Theme/ThemeContext';



function App() {
//--------------------Hooks------------------>

  const [items, setItem] = useState("")
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  const [newItems, setNewItems] = useState("");
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])
//------------------------------------------->
//-----------------functions----------------->
  const setstorage = (x) => {
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
  const HandleSubmit = (e) => {
    e.preventDefault();
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
        isDark={isDark} 
        toggleTheme={toggleTheme}
        newItems={newItems}
        setNewItems={setNewItems}
        HandleSubmit={HandleSubmit}
      />
      <p>its a {isDark ? 'dark theme': 'light theme'}</p>
      
    </body>
  );
}

export default App;
