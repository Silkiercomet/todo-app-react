import './todo.css'
import { useRef } from "react";
  
function AddItem({isDark, newItems,setNewItems,HandleSubmit}) {
    const inputRef = useRef();
    
    return (
        <form className="addForm" onSubmit={(e)=>{
          e.preventDefault()
          HandleSubmit()
        }} id={isDark?'Bg_DD':'Bg_LL'}>

      <button
        type="submit"
        aria-label="add item"
        onClick={() => inputRef.current.focus()}
        className="Subbtn"
        id={isDark?'B_D':'B_L'}
      >
      
      </button>

      <input
        autoFocus
        className={isDark?'C_DD':'C_LL'}
        ref={inputRef}
        id="addItems"
        type="text"
        placeholder="Create a new todo..."
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
        
      />


    </form>
    )
}

export default AddItem
