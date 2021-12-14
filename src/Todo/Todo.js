import Brand from './Brand'
import AddItem from './AddItem'
function Todo({isDark, toggleTheme,newItems,setNewItems,HandleSubmit}) {
    return (
        <main>
            <Brand isDark={isDark} toggleTheme={toggleTheme}/>
            <AddItem 
                newItems={newItems}
                setNewItems={setNewItems}
                HandleSubmit={HandleSubmit}
            />
        </main>
    )
}

export default Todo
