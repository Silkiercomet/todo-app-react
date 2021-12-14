import Todo from '../Todo/Todo'
import "./todocontainer.css"
function TodoContainer({isDark ,toggleTheme,newItems,setNewItems,HandleSubmit}) {
    return (
        <section className="container">
            <Todo isDark={isDark}
                toggleTheme={toggleTheme}
                newItems={newItems}
                setNewItems={setNewItems}
                HandleSubmit={HandleSubmit}
            />
        </section>
    )
}

export default TodoContainer
