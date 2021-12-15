const LineItem = ({isDark, item, HandleCheck, HandleDelete }) => {
    return (
      <li className="item" id={isDark?"DBB":"LBB"}>
        <input
          className="checkbox"
          id={item.id}
          type="checkbox"
          onChange={() => HandleCheck(item.id)}
          checked={item.checked}
        />
        <label for={item.id} className="checkmark"></label>
        <label
          className="text"
          style={
            item.checked === true ? { textDecoration: "line-through", color:"hsl(236, 9%, 61%)" } : null
          }
          onDoubleClick={() => HandleCheck(item.id)}
        >
          {item.item}
        </label>
        <button
          className="delete"
          onClick={() => HandleDelete(item.id)}
          tabIndex="0"
          aria-label={"Delete item " + item.item}
        />
        
      </li>
    );
  };
  export default LineItem;
  