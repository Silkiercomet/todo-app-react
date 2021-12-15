import LineItem from "./LineItem";

const ItemList = ({setActive,active,isDark, items, HandleCheck, HandleDelete, setItem }) => {
    const darkStyle = {
        color:"hsl(0, 0%, 98%)",
    },
    lightStyle = {
        color:"hsl(235, 24%, 19%)"
    },
    activeColor = {
        color:"hsl(220, 98%, 61%)"
    }
    let obj = {
        '0':items.map((item) => item)
        ,
        '1':items.filter((item) => {
            if(item.checked === false){
                return item
            }
        }),
        '2':items.filter((item) => {
            if(item.checked !== false){
                return item
            }
        })
    }
    
  return (
    <section className="itemsLIst"> 


        <ul className={isDark?"DList":"LList"}>
        {obj[active].map((item) => (
            <LineItem
            isDark={isDark}
            key={item.id}
            item={item}
            HandleCheck={HandleCheck}
            HandleDelete={HandleDelete}
            />
        ))}
        </ul>


        <footer className={isDark?"DList":"LList"}>
            <span style={{color:"hsl(234, 11%, 52%)"}}>items left: {items.length}</span>
            <menu className={isDark?"DList":"LList"}>
                <button onClick={()=>setActive(0)} className="btn" style={active === 0 ? activeColor : isDark ? darkStyle : lightStyle}>All</button>
                <button onClick={()=>setActive(1)} className="btn" style={active === 1 ? activeColor : isDark ? darkStyle : lightStyle}>Active</button>
                <button onClick={()=>setActive(2)} className="btn" style={active === 2 ? activeColor : isDark ? darkStyle : lightStyle}>Completed</button>
                
            </menu>
            <button className="btn" style={{color:"hsl(234, 11%, 52%)"}} 
            onClick={()=> setItem(obj["1"])}>Clear Completed</button>
        </footer>

    </section>
  );
};

export default ItemList;