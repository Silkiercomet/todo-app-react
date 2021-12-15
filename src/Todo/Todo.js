import Brand from './Brand'
import AddItem from './AddItem'
import ItemList from './ItemsList'
function Todo({setActive,active,items,isDark, toggleTheme,newItems,setNewItems,HandleSubmit,
    HandleCheck,HandleDelete,setItem}) {
    return (
        <main>
            <Brand isDark={isDark} toggleTheme={toggleTheme}/>
            <AddItem 
                newItems={newItems}
                setNewItems={setNewItems}
                HandleSubmit={HandleSubmit}
                isDark={isDark}
            />
            
            <ItemList 
            isDark={isDark}
            HandleCheck={HandleCheck}
            HandleDelete={HandleDelete}
            items={items}
            setActive={setActive}
            active={active}
            setItem={setItem}
            />
           
            
        </main>
    )
}

export default Todo
