import './todo.css'
import { useRef } from "react";
  
function AddItem({isDark, toggleTheme,newItems,setNewItems,HandleSubmit}) {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={HandleSubmit}>
      <label htmlFor="AddItem">add item</label>
      <button
        type="submit"
        aria-label="add item"
        onClick={() => inputRef.current.focus()}
      >
      <input
        autoFocus
        ref={inputRef}
        id="addItems"
        type="text"
        placeholder="add items"
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />

        
      </button>
    </form>
    )
}

export default AddItem
