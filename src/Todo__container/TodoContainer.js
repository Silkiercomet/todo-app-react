import Todo from '../Todo/Todo'
import "./todocontainer.css"
function TodoContainer({setActive,active,items,HandleCheck,HandleDelete,isDark ,
    toggleTheme,newItems,setNewItems,setItem,
    HandleSubmit}) {
    return (
        <section className="container">
            <Todo isDark={isDark}
                toggleTheme={toggleTheme}
                newItems={newItems}
                setNewItems={setNewItems}
                HandleSubmit={HandleSubmit}
                HandleCheck={HandleCheck}
                HandleDelete={HandleDelete}
                items={items}
                setActive={setActive}
                active={active}
                setItem={setItem}
            />
        </section>
    )
}

export default TodoContainer
